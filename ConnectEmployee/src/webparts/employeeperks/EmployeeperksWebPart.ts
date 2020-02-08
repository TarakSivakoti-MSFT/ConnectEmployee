import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'EmployeeperksWebPartStrings';
import Employeeperks from './components/Employeeperks';
import { IEmployeeperksProps } from './components/IEmployeeperksProps';
import { SPComponentLoader } from "@microsoft/sp-loader";

export interface IEmployeeperksWebPartProps {
  description: string;
}

export default class EmployeeperksWebPart extends BaseClientSideWebPart <IEmployeeperksWebPartProps> {

  public render(): void {
    let cssURL =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);
    const element: React.ReactElement<IEmployeeperksProps> = React.createElement(
      Employeeperks,
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
    return Version.parse('1.0');
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
                PropertyPaneTextField('description', {
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
