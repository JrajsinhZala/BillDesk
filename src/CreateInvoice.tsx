import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, View, useWindowDimensions} from 'react-native';
import Container from './components/Container';
import Typography from './components/Typography';
import {sharedStyles} from './theme/Styles';
import BorderTextInput from './components/BorderTextInput';
import CustomButton from './components/CustomButton';

interface props {
  navigation: any;
}

export default function CreateInvoice({navigation}: props) {
  const [invoiceData, setInvoiceData] = useState<any>({cgst: '9', sgst: '9'});
  const [error, setError] = useState<any>({});
  const firmNameRef: any = useRef(null);
  const addLine1Ref: any = useRef(null);
  const addLine2Ref: any = useRef(null);
  const addLine3Ref: any = useRef(null);
  const GSTRef: any = useRef(null);
  const PANRef: any = useRef(null);
  const stateRef: any = useRef(null);
  const codeRef: any = useRef(null);
  const placeOfSupplyRef: any = useRef(null);
  const vesselRef: any = useRef(null);
  const goodsRef: any = useRef(null);
  const hsnRef: any = useRef(null);
  const qntyRef: any = useRef(null);
  const rateRef: any = useRef(null);
  const cgstRef: any = useRef(null);
  const sgstRef: any = useRef(null);
  const invoiceNoRef: any = useRef(null);

  useEffect(() => {
    setError({});
  }, [invoiceData]);

  const onPressButton = () => {
    if (!invoiceData.buyerFirmName) {
      setError({buyerFirmName: 'Enter Buyer firm name'});
      firmNameRef?.current?.focus();
    } else if (!invoiceData.addressLine1) {
      setError({addressLine1: 'Enter Address'});
      addLine1Ref?.current?.focus();
    } else if (!invoiceData.addressLine2) {
      setError({addressLine2: 'Enter Address'});
      addLine2Ref?.current?.focus();
    } else if (!invoiceData.addressLine3) {
      setError({addressLine3: 'Enter Address'});
      addLine3Ref?.current?.focus();
    } else if (!invoiceData.GSTIN) {
      setError({GSTIN: 'Enter GST/IN number'});
      GSTRef?.current?.focus();
    } else if (!invoiceData.PAN) {
      setError({PAN: 'Enter PAN number'});
      PANRef?.current?.focus();
    } else if (!invoiceData.state) {
      setError({state: 'Enter State'});
      stateRef?.current?.focus();
    } else if (!invoiceData.code) {
      setError({code: 'Enter Code'});
      codeRef?.current?.focus();
    } else if (!invoiceData.placeofSupply) {
      setError({placeofSupply: 'Enter Place of supply'});
      placeOfSupplyRef?.current?.focus();
    } else if (!invoiceData.invoiceNo) {
      setError({invoiceNo: 'Enter invoice no'});
      invoiceNoRef?.current?.focus();
    } else if (!invoiceData.dated) {
      setError({dated: 'Enter Date'});
    } else if (!invoiceData.vesselFlightNo) {
      setError({vesselFlightNo: 'Enter vessel/flight number'});
      vesselRef?.current?.focus();
    } else if (!invoiceData.goods) {
      setError({goods: 'Enter goods name'});
      goodsRef?.current?.focus();
    } else if (!invoiceData.hsn) {
      setError({hsn: 'Enter HSN number'});
      hsnRef?.current?.focus();
    } else if (!invoiceData.quantity) {
      setError({quantity: 'Enter quantity'});
      qntyRef?.current?.focus();
    } else if (!invoiceData.rate) {
      setError({rate: 'Enter rate'});
      rateRef?.current?.focus();
    } else if (!invoiceData.cgst) {
      setError({cgst: 'Enter CGST'});
      cgstRef?.current?.focus();
    } else if (!invoiceData.sgst) {
      setError({sgst: 'Enter SGST'});
      sgstRef?.current?.focus();
    } else {
      navigation.navigate('')
    }
  };

  return (
    <>
      <Container>
        <Typography
          size={20}
          style={[sharedStyles.textCenter, sharedStyles.margin10]}>
          Create Invoice
        </Typography>
        <View style={[sharedStyles.margin10]}>
          <BorderTextInput
            customRef={firmNameRef}
            label="Buyer Firm Name"
            value={invoiceData.buyerFirmName}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                buyerFirmName: value,
              });
            }}
            errorMassage={error.buyerFirmName}
            returnKeyType="next"
            onSubmitEditing={() => addLine1Ref?.current?.focus()}
          />
          <BorderTextInput
            customRef={addLine1Ref}
            label="Address Line 1"
            value={invoiceData.addressLine1}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                addressLine1: value,
              });
            }}
            errorMassage={error.addressLine1}
            returnKeyType="next"
            onSubmitEditing={() => addLine2Ref?.current?.focus()}
          />
          <BorderTextInput
            customRef={addLine2Ref}
            label="Address Line 2"
            value={invoiceData.addressLine2}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                addressLine2: value,
              });
            }}
            errorMassage={error.addressLine2}
            returnKeyType="next"
            onSubmitEditing={() => addLine3Ref?.current?.focus()}
          />
          <BorderTextInput
            customRef={addLine3Ref}
            label="Address Line 3"
            value={invoiceData.addressLine3}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                addressLine3: value,
              });
            }}
            errorMassage={error.addressLine3}
            returnKeyType="next"
            onSubmitEditing={() => GSTRef?.current?.focus()}
          />
          <BorderTextInput
            customRef={GSTRef}
            label="Buyer GSTIN/UIN"
            value={invoiceData.GSTIN}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                GSTIN: value,
              });
            }}
            errorMassage={error.GSTIN}
            returnKeyType="next"
            onSubmitEditing={() => PANRef?.current?.focus()}
          />
          <BorderTextInput
            customRef={PANRef}
            label="PAN/IT No."
            value={invoiceData.PAN}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                PAN: value,
              });
            }}
            errorMassage={error.PAN}
            returnKeyType="next"
            onSubmitEditing={() => stateRef?.current?.focus()}
          />
          <BorderTextInput
            customRef={stateRef}
            label="Buyer State"
            value={invoiceData.state}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                state: value,
              });
            }}
            errorMassage={error.state}
            returnKeyType="next"
            onSubmitEditing={() => codeRef?.current?.focus()}
          />
          <BorderTextInput
            customRef={codeRef}
            label="Code"
            value={invoiceData.code}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                code: value,
              });
            }}
            keyboardType="phone-pad"
            errorMassage={error.code}
            returnKeyType="next"
            onSubmitEditing={() => placeOfSupplyRef?.current?.focus()}
          />
          <BorderTextInput
            customRef={placeOfSupplyRef}
            label="Place of Supply"
            value={invoiceData.placeofSupply}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                placeofSupply: value,
              });
            }}
            errorMassage={error.placeofSupply}
            returnKeyType="next"
            onSubmitEditing={() => invoiceNoRef?.current?.focus()}
          />

          <BorderTextInput
            customRef={invoiceNoRef}
            label="Invoice No."
            value={invoiceData.invoiceNo}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                invoiceNo: value,
              });
            }}
            errorMassage={error.invoiceNo}
            returnKeyType="next"
            onSubmitEditing={() => vesselRef?.current?.focus()}
          />
          <BorderTextInput
            label="Dated"
            value={invoiceData.dated}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                dated: value,
              });
            }}
            errorMassage={error.dated}
          />
          <BorderTextInput
            customRef={vesselRef}
            label="Vessel/Flight No."
            value={invoiceData.vesselFlightNo}
            onChangeText={(value: string) => {
              setInvoiceData({
                ...invoiceData,
                vesselFlightNo: value,
              });
            }}
            errorMassage={error.vesselFlightNo}
            returnKeyType="next"
            onSubmitEditing={() => goodsRef?.current?.focus()}
          />
          <View style={sharedStyles.vertical}>
            <View style={sharedStyles.horizontal}>
              <BorderTextInput
                customRef={goodsRef}
                label="Goods"
                customContainerStyle={[sharedStyles.flex, sharedStyles.marginE]}
                value={invoiceData.goods}
                onChangeText={(value: string) => {
                  setInvoiceData({
                    ...invoiceData,
                    goods: value,
                  });
                }}
                errorMassage={error.goods}
                returnKeyType="next"
                onSubmitEditing={() => hsnRef?.current?.focus()}
              />
              <BorderTextInput
                customRef={hsnRef}
                label="HSN/SAC"
                customContainerStyle={[sharedStyles.flex, sharedStyles.marginE]}
                value={invoiceData.hsn}
                onChangeText={(value: string) => {
                  setInvoiceData({
                    ...invoiceData,
                    hsn: value,
                  });
                }}
                keyboardType="phone-pad"
                errorMassage={error.hsn}
                returnKeyType="next"
                onSubmitEditing={() => qntyRef?.current?.focus()}
              />
              <BorderTextInput
                customRef={qntyRef}
                label="Quantity"
                customContainerStyle={[sharedStyles.flex]}
                value={invoiceData.quantity}
                onChangeText={(value: string) => {
                  setInvoiceData({
                    ...invoiceData,
                    quantity: value,
                  });
                }}
                keyboardType="phone-pad"
                errorMassage={error.quantity}
                returnKeyType="next"
                onSubmitEditing={() => rateRef?.current?.focus()}
              />
            </View>
            <View style={sharedStyles.horizontal}>
              <BorderTextInput
                customRef={rateRef}
                customContainerStyle={[sharedStyles.flex, sharedStyles.marginE]}
                label="Rate"
                value={invoiceData.rate}
                onChangeText={(value: string) => {
                  setInvoiceData({
                    ...invoiceData,
                    rate: value,
                  });
                }}
                keyboardType="phone-pad"
                errorMassage={error.rate}
                returnKeyType="done"
                onSubmitEditing={() => rateRef?.current?.blur()}
              />
              <BorderTextInput
                customRef={cgstRef}
                customContainerStyle={[sharedStyles.flex, sharedStyles.marginE]}
                label="CGST"
                value={invoiceData.cgst}
                onChangeText={(value: string) => {
                  setInvoiceData({
                    ...invoiceData,
                    cgst: value,
                  });
                }}
                keyboardType="phone-pad"
                errorMassage={error.cgst}
                returnKeyType="next"
                onSubmitEditing={() => sgstRef?.current?.focus()}
              />
              <BorderTextInput
                customRef={sgstRef}
                customContainerStyle={sharedStyles.flex}
                label="SGST"
                value={invoiceData.sgst}
                onChangeText={(value: string) => {
                  setInvoiceData({
                    ...invoiceData,
                    sgst: value,
                  });
                }}
                keyboardType="phone-pad"
                errorMassage={error.sgst}
                returnKeyType="done"
                onSubmitEditing={() => sgstRef?.current?.blur()}
              />
            </View>
          </View>
        </View>

        <CustomButton
          buttonStyle={sharedStyles.margin10}
          label="Create PDF"
          onPress={onPressButton}
        />
      </Container>
    </>
  );
}
