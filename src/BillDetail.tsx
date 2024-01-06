import React, {useEffect, useState} from 'react';
import {ScrollView, View, useWindowDimensions} from 'react-native';
import RNHTMLtoPDF, {Options} from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';
import {generateBill, generateList} from './utilities/GenerateBill';
import WebView from 'react-native-webview';

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
    item: [
      {
        no: 1,
        name: 'Edge Protector (Plastic Yellow Corner)',
        HSN: '39239090',
        quantity: '1,03,500',
        rate: '0.85',
        amount: '87,975.00',
        CGST: '7,918.00',
        SGST: '7,918.00',
      },
      {
        no: 1,
        name: 'Edge Protector (Plastic Yellow Corner)',
        HSN: '39239090',
        quantity: '1,03,500',
        rate: '0.85',
        amount: '87,975.00',
        CGST: '7,918.00',
        SGST: '7,918.00',
      },
      {
        no: 1,
        name: 'Edge Protector (Plastic Yellow Corner)',
        HSN: '39239090',
        quantity: '1,03,500',
        rate: '0.85',
        amount: '87,975.00',
        CGST: '7,918.00',
        SGST: '7,918.00',
      },
    ],
    farmPan: 'ABUPZ2491D',
    bankName: 'HDFC BANK',
    bankAc: '50200070212158',
    bankIFSC: 'ADARSH COMPLEX & HDFC0002499',
    totalQuantity: '1,03,500',
    totalAmount: '1,03,811.00',
  };

  useEffect(() => {
    createPDF();
  }, []);
  const createPDF = async () => {
    generateList(data);
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
          <WebView
            originWhitelist={['*']}
            scalesPageToFit={true}
            contentMode='mobile'
            setBuiltInZoomControls={true}
            setDisplayZoomControls={true}
            source={{html: generateBill(data)}}
            style={{flex: 1}}
          />
          {/* <Pdf
            source={{uri: pdfFile}}
            onLoadComplete={(numberOfPages) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page) => {
              console.log(`Current page: ${page}`);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={{flex: 1, width: width, height: height}}
          /> */}
        </ScrollView>
      </View>
    </>
  );
}
