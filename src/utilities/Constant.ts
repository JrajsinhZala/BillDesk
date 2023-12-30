

export const Bill = {
  HTML:`<!DOCTYPE html>
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
                                      rowspan="2">
                                      <p style="margin: 0;"><b>Rajshakti Enterprise</b></p>
                                      <p style="margin: 0;">PGVCL OFFICE, BLOCK - 79, DAYA KRUPA, </p>
                                      <p style="margin: 0;">Devikripa Apartment, Madhubhai Bora Marg, Anant Nagar, Morbi
                                      </p>
                                      <p style="margin: 0;">GSTIN/UIN: 24ABUPZ2491D1Z5</p>
                                      <p style="margin: 0;">State Name : Gujarat, Code : 24 </p>
                                      <p style="margin: 0;">Contact : 9426255055 </p>
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                              </tr>
                              <tr>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                              </tr>
  
                              <tr>
                                  <td style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;"
                                      rowspan="3">
                                      <p style="margin: 0;"><b>Rajshakti Enterprise</b></p>
                                      <p style="margin: 0;">PGVCL OFFICE, BLOCK - 79, DAYA KRUPA, </p>
                                      <p style="margin: 0;">Devikripa Apartment, Madhubhai Bora Marg, Anant Nagar, Morbi
                                      </p>
                                      <p style="margin: 0;">GSTIN/UIN: 24ABUPZ2491D1Z5</p>
                                      <p style="margin: 0;">State Name : Gujarat, Code : 24 </p>
                                      <p style="margin: 0;">Contact : 9426255055 </p>
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                              </tr>
                              <tr>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                              </tr>
  
                              <tr>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Invoice No.</p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
                                  </td>
                              </tr>
                              <tr>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;"><b>Rajshakti Enterprise</b></p>
                                      <p style="margin: 0;">PGVCL OFFICE, BLOCK - 79, DAYA KRUPA, </p>
                                      <p style="margin: 0;">Devikripa Apartment, Madhubhai Bora Marg, Anant Nagar, Morbi
                                      </p>
                                      <p style="margin: 0;">GSTIN/UIN: 24ABUPZ2491D1Z5</p>
                                      <p style="margin: 0;">State Name : Gujarat, Code : 24 </p>
                                      <p style="margin: 0;">Contact : 9426255055 </p>
                                  </td>
                                  <td colspan="2"
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      <p style="margin: 0;">Terms of Delivery
                                      </p>
                                      <p style="margin: 0;"> <b> RE/22-23/006</b> </p>
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
                                      style="padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 35%;text-align: left;">
                                      Description of Goods</th>
                                  <th
                                      style="padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 10%;text-align: left;">
                                      HSN/SAC </th>
                                  <th
                                      style="padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 10%;text-align: center;">
                                      GST <br> Rate </th>
                                  <th
                                      style="padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 10%;text-align: center;">
                                      GST <br> Rate </th>
                                  <th
                                      style="padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 10%;text-align: center;">
                                      GST <br> Rate </th>
                                  <th
                                      style="padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000;border-right: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 10%;text-align: center;">
                                      GST <br> Rate </th>
                                  <th
                                      style="padding: 8px 10px;background-color: #fff;border-bottom: 1px solid #000; font-family: sans-serif;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;width: 15%;text-align: right;">
                                      Amount</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      Plastic Corner</td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      39239090
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: right;">
                                      94,000
                                  </td>
                              </tr>
  
                              <tr>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      Plastic Corner</td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      39239090
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: right;">
                                      94,000
                                  </td>
                              </tr>
                              <tr>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      Plastic Corner</td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      39239090
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: right;">
                                      94,000
                                  </td>
                              </tr>
                              <tr>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      Plastic Corner</td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      39239090
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      18% </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-bottom: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: right;">
                                      94,000
                                  </td>
                              </tr>
  
                              <tr>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
                                      Total</td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: left;">
  
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                      <b> 18%</b>
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: center;">
                                  </td>
                                  <td
                                      style="padding: 6px 10px;font-family: sans-serif;border-top: 1px solid #000;border-bottom: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;text-align: right;">
                                      <b>94,000</b>
                                  </td>
                              </tr>
  
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
                              <th style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
                                  rowspan="2">HSN/SAC</th>
                              <th style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
                                  rowspan="2">Taxable Value</th>
                              <th style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
                                  colspan="2">Central Tax</th>
                              <th style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
                                  colspan="2">Central Tax</th>
                              <th style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;"
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
  
                          <tr>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  39239090</td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  39239090</td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  39239090</td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  39239090</td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  39239090</td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  39239090</td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  39239090</td>
                          </tr>
                          <tr>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>Total</b></td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>39239090</b></td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>39239090</b></td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>39239090</b></td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>39239090</b></td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 1px solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>39239090</b></td>
                              <td
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: center; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  <b>39239090</b></td>
                          </tr>
                          <tr>
                              <td colspan="7"
                                  style="padding: 6px 10px;font-family: sans-serif;text-align: left; border-top: 1px solid #000;border-bottom: 0 solid #000;border-right: 0 solid #000;font-size: 16px;line-height: 24px;color: #000;vertical-align: top;">
                                  Tax Amount (in words) <b>: INR Fourteen Thousand Three Hundred Eighty Two Only</b>
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
                                  <td
                                      style="width: 50%;padding: 0 10px; font-family: sans-serif;font-size: 16px; line-height: 21px;color: #000;vertical-align: top;text-align: left;">
                                      Company's PAN <b>: ABUPZ2491D</b> <br><br>
                                      <p style="margin: 0;">Declaration</p>
                                      <p style="margin: 0;">We declare that this invoice shows the actual price of <br>
                                          the goods described and that all particulars are true and correct.</p>
                                  </td>
                                  <td style="width: 50%;padding: 0 10px;">
                                      <p style="margin: 0;">Company's Bank Details</p>
                                      <p style="margin: 0;">A/c Holder's Name : <b>Rajshakti Enterprise</b></p>
                                      <p style="margin: 0;">Bank Name : <b>HDFC Bank (India)</b> </p>
                                      <p style="margin: 0;">A/c No. : <b>50200070212158</b></p>
                                      <p style="margin: 0;">Branch & IFS Code : <b>ADARSH COMPLEX & HDFC0002499</b></p>
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
                                      <p style="margin: 0;"><b>for Rajshakti Enterprise</b> </p>
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
  </html>
  `,
};


