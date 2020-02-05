import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "HrconnectWebPartStrings";
import Hrconnect from "./components/Hrconnect";
import { IHrconnectProps } from "./components/IHrconnectProps";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { SPComponentLoader } from "@microsoft/sp-loader";
import "jquery";
require("bootstrap");
import styles from "./components/Hrconnect.module.scss";
import * as microsoftTeams from "@microsoft/teams-js";
microsoftTeams.initialize();
export interface IHrconnectWebPartProps {
  description: string;
}

export default class HrconnectWebPart extends BaseClientSideWebPart<
  IHrconnectWebPartProps
> {
  public render(): void {
    let cssURL =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css');
    const element: React.ReactElement<IHrconnectProps> = React.createElement(
      Hrconnect,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
