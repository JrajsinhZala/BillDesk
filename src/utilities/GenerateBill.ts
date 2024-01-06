export function generateBill(params: any) {
  let html = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TAX INVOICE</title>
      <style>
          @page {
              size: A3;
          }
  
          @media print {}
      </style>
  </head>
  
  <body style="width:100%;margin: 0 auto;">
      <table id="htmlContent"
          style="font-family: sans-serif;font-size: 16px; line-height: 1.5;color: #000;width: 100%;border-spacing: 0;">
          <tbody>
              <tr>
                  <td colspan="2" style="height:5px"></td>
              </tr>
              <tr>
                  <td class="invoice-title" colspan="2"
                      style="border-spacing: 0;text-align: center;padding: 0;line-height: 32px;font-size: 18px;text-transform: uppercase;color: #333;font-weight: 700;">
                      Tax Invoice
                  </td>
              </tr>
              <tr>
                  <td colspan="2" style="height:5px"></td>
              </tr>
  
              <tr>
                  <td colspan="2" style="height:5px;"></td>
              </tr>
              <tr>
                  <td colspan="2" style="width: 100%;border-spacing: 0;">
                      <table style="width: 100%;border-spacing: 0;border: 1px solid #000;">
                          <tbody>
                          <tr>
                          <td style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;"
                              rowspan="3">
                              <p style="margin: 0;"><b>${
                                params.farmName
                              }</b></p>
                              <p style="margin: 0;">${params.addLine1}</p>
                              <p style="margin: 0;">${params.addLine2}</p>
                              <p style="margin: 0;">${params.addLine3}</p>
                              <p style="margin: 0;">GUJARAT-363642</p>
                              <p style="margin: 0;">GSTIN/UIN: ${
                                params.gstIn
                              }</p>
                              <p style="margin: 0;">State Name : Gujarat, Code : 24 </p>
                              <p style="margin: 0;">Contact : ${
                                params.contact
                              }</p>
                          </td>
                          <td
                              style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                              <p style="margin: 0;">Invoice No.</p>
                              <p style="margin: 0;"> <b></b> </p>
                          </td>
                          <td
                              style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                              <p style="margin: 0;">Dated</p>
                              <p style="margin: 0;"> <b></b> </p>
                          </td>
                      </tr>
                      <tr>
                          <td
                              style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                              <p style="margin: 0;">Reference No. & Date.</p>
                              <p style="margin: 0;"> <b></b> </p>
                          </td>
                          <td
                              style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                              <p style="margin: 0;">Other References</p>
                              <p style="margin: 0;"> <b></b> </p>
                          </td>
                      </tr>

                      <tr>
                          <td
                              style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                              <p style="margin: 0;">Buyer's Order No.</p>
                              <p style="margin: 0;"> <b></b> </p>
                          </td>
                          <td
                              style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                              <p style="margin: 0;">Dated</p>
                              <p style="margin: 0;"> <b></b> </p>
                          </td>
                      </tr>


                      <tr>
                      <td style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;"
                          rowspan="3">
                          <p style="margin: 0;"><b>${
                            params.buyerfarmName
                          }</b></p>
                          <p style="margin: 0;">${params.buyeraddLine1}, ${params.buyeraddLine2}, </p>
                          <p style="margin: 0;">${params.buyeraddLine3}.</p>
                          <p style="margin: 0;">GSTIN/UIN: ${
                            params.buyergstIn
                          }</p>
                          <p style="margin: 0;">PAN/IT No: ${
                            params.buyerPan
                          }</p>
                          <p style="margin: 0;">State Name : ${
                            params.buyerState
                          }, Code : ${params.buyercode} </p>
                          <p style="margin: 0;">Contact : ${
                            params.buyercontact
                          } </p>
                          <p style="margin: 0;">Place of Supply : ${
                            params.supply
                          } </p>
                      </td>
                      <td
                          style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                          <p style="margin: 0;">Dispatch Doc No.</p>
                          <p style="margin: 0;"> <b></b> </p>
                      </td>
                      <td
                          style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                          <p style="margin: 0;">Delivery Note Date.</p>
                          <p style="margin: 0;"> <b></b> </p>
                      </td>
                  </tr>
                  <tr>
                      <td
                          style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                          <p style="margin: 0;">Dispatched through</p>
                          <p style="margin: 0;"> <b></b> </p>
                      </td>
                      <td
                          style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                          <p style="margin: 0;">Destination</p>
                          <p style="margin: 0;"> <b></b> </p>
                      </td>
                  </tr>

                  <tr>
                      <td
                          style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                          <p style="margin: 0;">Vessel/Flight No..</p>
                          <p style="margin: 0;"> <b></b> </p>
                      </td>
                      <td
                          style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                          <p style="margin: 0;">Place of receipt by shipper:</p>
                          <p style="margin: 0;"><b></b> </p>
                      </td>
                  </tr>
                  
                  <tr>
                      <td
                          style="height:100px;padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                     
                      </td>
                      <td colspan="2"
                          style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                          <p style="margin: 0;">Terms of Delivery</p>
                       
                      </td>
                  </tr>
                          </tbody>
  
                      </table>
                  </td>
              </tr>
  
              <tr>
                  <td colspan="2" style="width: 100%;border-spacing: 0;">
                      <table style="width: 100%;border-spacing: 0;border: 1px solid #000;border-top: none;">
                          <thead>
                          <tr>
                          <th
                             style="border-top: 1px solid #000;padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 5%;text-align: center;">
                             SI No.</th>
                          <th
                             style="border-top: 1px solid #000;padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 35%;text-align: center;">
                             Description of Goods</th>
                          <th
                             style="border-top: 1px solid #000;padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;">
                             HSN/SAC </th>
                          <th
                             style="border-top: 1px solid #000;padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;">
                             Quantity </th>
                          <th
                             style="border-top: 1px solid #000;padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 10%;text-align: center;">
                             Rate </th>
                          <th
                             style="border-top: 1px solid #000;padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 5%;text-align: center;">
                             per </th>
                          <th
                             style="border-top: 1px solid #000;padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;">
                             Amount </th> 
                      </tr>
                          </thead>
                          <tbody>
                          ${generateList(params)} 
                          <thead>

                          <tr>
                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 5%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 35%;text-align: right;">
                                  CGST OUTPUT</th>
                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 10%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 5%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;">
                                  ${params.item[0].CGST}</th>
                          </tr>

                          <tr>
                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 5%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 35%;text-align: right;">
                                  SGST OUTPUT</th>
                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 10%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 5%;text-align: center;" />

                              <th
                                  style="padding: 8px 10px;background-color: #fff;font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;">
                                  ${params.item[0].SGST}</th>
                          </tr>

                      </thead>
                      <thead>
                      <tr>
                          <th style="padding: 8px 10px;background-color: #fff;border-top: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;" />

                          <th style="padding: 8px 10px;background-color: #fff;border-top: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: right;">
                          Total
                          </th>

                          <th style="padding: 8px 10px;background-color: #fff;border-top: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;" />

                          <th style="padding: 8px 10px;background-color: #fff;border-top: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                            1,03,500 PCS
                          </th>

                          <th style="padding: 8px 10px;background-color: #fff;border-top: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;" />

                          <th style="padding: 8px 10px;background-color: #fff;border-top: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;" />
                       
                          <th style="padding: 8px 10px;background-color: #fff;border-top: 1px solid #000;font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                            ₹ 1,03,811.00
                          </th>
                      </tr>
                  </thead>    
                              <tr>
                                  <td colspan="5"
                                      style="padding: 6px 10px 0;font-family: sans-serif;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      Amount Chargeable (in words)</td>
                                  <td colspan="2"
                                      style="padding: 6px 10px 0;font-family: sans-serif;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: right;">
                                      E. & O.E
                                  </td>
  
                              </tr>
                              <tr>
                                  <td colspan="7"
                                      style="padding: 6px 10px;font-family: sans-serif;border-top: 0 solid #000;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <b>INR Ninety Four Thousand Two Hundred Eighty Two Only
                                      </b>
                                  </td>
                              </tr>
                          </tbody>
  
                      </table>
  
                      <table style="width: 100%;border-spacing: 0;border: 1px solid #000;border-top: none;">
                          <tr>
                              <th style="width: 40%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
                                  rowspan="2">HSN/SAC</th>
                              <th style="width: 10%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
                                  rowspan="2">Taxable Value</th>
                              <th style="width: 20%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
                                  colspan="2">Central Tax</th>
                              <th style="width: 20%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
                                  colspan="2">Central Tax</th>
                              <th style="width: 10%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
                                  rowspan="2">Total <br> Taxable Value</th>
                          </tr>
                          <tr>
                              <th
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  Rate</th>
                              <th
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  Amount</th>
                              <th
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  Rate</th>
                              <th
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  Amount</th>
                          </tr>
  
                          ${describeList([{}, {}])}
                          <tr>
                              <td
                                  style="width: 40%;padding: 6px 10px;font-family: sans-serif;text-align: right; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: center;">
                                  <b>Total</b>
                              </td>
                              <td
                                  style="width: 10%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>87,975.00</b>
                              </td>
                              <td
                                  style="width: 10%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b></b>
                              </td>
                              <td
                                  style="width: 10%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>7,918.00</b>
                              </td>
                              <td
                                  style="width: 10%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b></b>
                              </td>
                              <td
                                  style="width: 10%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>7,918.00</b>
                              </td>
                              <td
                                  style="width: 10%;padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>15,836.00</b>
                              </td>
                          </tr>
                       
                      </table>
                  </td>
              </tr>
  
  
              <tr>
                  <td style="border-spacing: 0;vertical-align: top;padding-top: 20px;">
  
                      <table style="border-spacing: 0;vertical-align: top;text-align: left;width: 100%;">
                      <tbody>
                      <tr>
                          <p style="margin: 0;">Tax Amount (in words) <b>: INR Fourteen Thousand Three Hundred
                                  Eighty Two Only</b></p>
                          <p style="margin: 0;"> Company's PAN <b>: ABUPZ2491D</b> <br><br></p>
                          <td
                              style="width: 50%;padding: 0 10px; font-family: sans-serif;font-size: 16px; line-height: 21px;color: #000;vertical-align: top;text-align: left;">
                              <p style="margin: 0;">Declaration</p>
                              <p style="margin: 0;">We declare that this invoice shows the actual price of <br>
                                  the goods described and that all particulars are true and correct.</p>
                          </td>
                          <td style="width: 50%;padding: 0 10px;">
                              <p style="margin: 0;">Company's Bank Details</p>
                              <p style="margin: 0;">A/c Holder's Name : <b>${
                                params.farmName
                              }</b></p>
                              <p style="margin: 0;">Bank Name : <b>${
                                params.bankName
                              } (${params.bankAc})C/A</b> </p>
                              <p style="margin: 0;">A/c No. : <b>${
                                params.bankAc
                              }</b></p>
                              <p style="margin: 0;">Branch & IFS Code : <b>${
                                params.bankIFSC
                              }</b></p>
                          </td>
                      </tr>

                  </tbody>
                      </table>
                  </td>
              </tr>
  
              <tr>
                  <td style="height:20px;"></td>
              </tr>
  
              <tr>
                  <td style="border-spacing: 0;vertical-align: top;padding-top: 20px;border-top: 1px solid #000;">
  
                      <table style="border-spacing: 0;vertical-align: top;text-align: left;width: 100%;">
                          <tbody>
                              <tr>
                                  <td rowspan="2"
                                      style="width: 50%;padding: 0 10px; font-family: sans-serif;font-size: 16px; line-height: 21px;color: #000;vertical-align: top;text-align: left;">
                                      <p>Customer's Seal and Signature</p>
                                  </td>
                                  <td style="width: 50%;padding: 0 10px;text-align: right;">
                                      <p style="margin: 0;"><b>for ${
                                        params.farmName
                                      }</b> </p>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <table style="width: 100%;">
                                          <tr>
                                              <td style="text-align: left;width: 30%;"> </td>
                                              <td style="text-align: center;width: 30%;"> </td>
                                              <td style="text-align: right;width: 40%;"> </td>
                                          </tr>
                                          <tr>
                                              <td style="text-align: left;">Prepared by</td>
                                              <td style="text-align: center;">Verified by</td>
                                              <td style="text-align: right;">Authorised Signatory</td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
  </body>
  </html>`;

  return html;
}

export function generateList(params: any) {
  let html = params.item.map(
    (item: any) =>
      `<tr>
        <th
           style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 5%;text-align: center;">
           ${item.no}</th>
        <th
           style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 35%;text-align: left;">
           ${item.name}</th>
        <th
           style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;">
           ${item.HSN}</th>
        <th
           style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;">
           ${item.quantity}</th>
        <th
           style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 10%;text-align: center;">
           ${item.rate}</th>
        <th
           style="padding: 8px 10px;background-color: #fff;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 5%;text-align: center;">
           PSC</th>
        <th
           style="padding: 8px 10px;background-color: #fff; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: center;">
           ${item.amount}</th> 
    </tr>`,
  );
  let makeString = html.toString();
  return makeString.replace(/,/g, '');
}

export function describeList(params: any) {
  let html = params.map(
    (item: any) =>
      `<tr>
        <td
            style="padding: 6px 10px;font-family: sans-serif;text-align: left; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: center;">
            39239090</td>
        <td
            style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: center;">
            87,975.00</td>
        <td
            style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: center;">
            9%</td>
        <td
            style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: center;">
            7,918.00</td>
        <td
            style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: center;">
            9%</td>
        <td
            style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: center;">
            7,918.00</td>
        <td
            style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: center;">
            15,836.00</td>
    </tr>`,
  );
  let makeString = html.toString();
  return makeString.replace(/,/g, '');
}

function convertNumberToWords(number: any) {
  const units = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];
  const teens = [
    '',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  const tens = [
    '',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ];

  function convertChunk(chunk: any) {
    const hundreds = Math.floor(chunk / 100);
    const remainder = chunk % 100;
    let words = '';

    if (hundreds > 0) {
      words += units[hundreds] + ' Hundred';
      if (remainder > 0) {
        words += ' and ';
      }
    }

    if (remainder > 10 && remainder < 20) {
      words += teens[remainder - 10];
    } else {
      const tensDigit = Math.floor(remainder / 10);
      const unitsDigit = remainder % 10;

      if (tensDigit > 0) {
        words += tens[tensDigit];
        if (unitsDigit > 0) {
          words += ' ';
        }
      }

      if (unitsDigit > 0) {
        words += units[unitsDigit];
      }
    }

    return words;
  }

  if (number === 0) {
    return 'Zero';
  }

  const billion = Math.floor(number / 1000000000);
  const million = Math.floor((number % 1000000000) / 1000000);
  const thousand = Math.floor((number % 1000000) / 1000);
  const remainder = number % 1000;

  let words = '';

  if (billion > 0) {
    words += convertChunk(billion) + ' Billion ';
  }

  if (million > 0) {
    words += convertChunk(million) + ' Million ';
  }

  if (thousand > 0) {
    words += convertChunk(thousand) + ' Thousand ';
  }

  if (remainder > 0) {
    words += convertChunk(remainder);
  }

  return words.trim();
}

// Example usage
const number = 103811;
const words = convertNumberToWords(number);
console.log(words); // Output: "One Lakh Three Thousand Eight Hundred Eleven"
