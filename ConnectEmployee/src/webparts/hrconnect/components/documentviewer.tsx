import * as React from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

 export default class  Documentviewer extends React.Component {
 public state = {
    numPages: null,
    pageNumber: 1,
  };
 
public  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }
 
 public render() {
    return (
      <div>
        <Document
          file="https://contosohealthsystem.sharepoint.com/:b:/s/ConnectEmployee/Ees0osQQlz5IphiP4cMqa80BPqDh1LhwSB8D_lKM6GhAiA?e=lSmSAv"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page
            pageNumber={this.state.pageNumber}
          />
        </Document>
        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
      </div>
    );
  }
}