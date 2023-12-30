import React, {useEffect, useState} from 'react';
import {ScrollView, View, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {generateBill} from './utilities/GenerateBill';
import RNHTMLtoPDF, {Options} from 'react-native-html-to-pdf';
import {WebView} from 'react-native-webview';
import Pdf from 'react-native-pdf';

interface props {}

export default function BillDetail(props: props) {
  const {width, height} = useWindowDimensions();
  const [pdfFile, setPDFFile] = useState('');

  const data = {
    farmName: 'RAJSHAKTI ENTERPRISE',
    addLine1: 'SURVEY NO.14',
    addLine2: 'SHED PLOT NO.2',
    addLine3: 'NR.SHIV SHAKTI COAL CORPORATION TIMDI ROAD MORBI',
    gstIn: '24ABUPZ2491D1Z5',
    contact: '9426255055',

    buyerfarmName: 'TECH WRAPPERS PRIVATE LIMITED',
    buyeraddLine1: 'NEAR IOCL PUMP',
    buyeraddLine2: 'TALUKO MUNDRA, L.S. NO. 236',
    buyeraddLine3: 'DESHALPAR, Deshalpar, Kachchh',
    buyergstIn: '24AAJCT3125F2ZL',
    buyercontact: '9426255055',
    buyerPan: 'AAJCT3125F',
    buyerState: 'Gujarat',
    buyercode: '24',
    supply: 'Gujarat',

    farmPan: 'ABUPZ2491D',
    bankName: 'HDFC BANK',
    bankAc: '50200070212158',
    bankIFSC: 'ADARSH COMPLEX & HDFC0002499',
  };

  useEffect(() => {
    createPDF();
  }, []);
  const createPDF = async () => {
    let options: Options = {
      html: generateBill(data),
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    if (file) {
      console.log(file.filePath);
      setPDFFile(file.filePath || '');
    }
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <Pdf
            source={{uri: pdfFile}}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={{flex: 1, width: width, height: height}}
          />
        </ScrollView>
      </View>
    </>
  );
}
