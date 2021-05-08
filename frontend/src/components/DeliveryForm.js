import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Payment from "./PaymentMethods";

import "./styles/DeliveryForm.css";
import "react-toastify/dist/ReactToastify.css";

import "./styles/Form.css";
import CartContext from "./contexts/CartContext";
const DeliveryForm = ({ title, isDeliveryForm }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [streetaddress, setStreetaddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const history = useHistory();

  document.title = title;

  const [delivery, setDelivery] = useState({});
  const handleAdress = (e) => {
    e.preventDefault();

    context.address = {
      ...context.address,
      firstname,
      lastname,
      streetaddress,
      country,
      city,
      state,
      email,
      phonenumber,
    };
    console.log(context.address);

    //         setDelivery({firstname, lastname, streetaddress, country, city, state, email, phonenumber});
    //          setIsAdding(true);
    // >>>>>> 2e705078a87a1d3c6d60a749de686594fad64a54
  };
  return (
    <div>
      <div class="p1">
        <form class="f1" onSubmit={(e) => handleAdress(e)}>
          <h1 align="center">Fill out your address details</h1>
          <br />
          {isDeliveryForm ? (
            <div>
              <label htmlFor="country">Country or region : </label>
              <br />

              <select
                id="country"
                onSelect={(e) => {
                  setCountry(e.target.value);
                  console.log(e.options[e.selectedIndex].text);
                }}
                autocomplete="country"
              >
                <option value="US">United States</option>
                <option value="AA">APO/FPO/DPO</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan Republic</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BR">Brazil</option>
                <option value="VG">British Virgin Islands</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde Islands</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CD">Congo, Democratic Republic of the</option>
                <option value="CG">Congo, Republic of the</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote d Ivoire (Ivory Coast)</option>
                <option value="HR">Croatia, Republic of</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Islas Malvinas)</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="GA">Gabon Republic</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KR">Korea, South</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macau</option>
                <option value="MK">Macedonia</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="SH">Saint Helena</option>
                <option value="KN">Saint Kitts-Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="SM">San Marino</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="TW">Taiwan</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TG">Togo</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VA">Vatican City State</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Vietnam</option>
                <option value="VI">Virgin Islands (U.S.)</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="WS">Western Samoa</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
              <br />
            </div>
          ) : (
            ""
          )}
          <table>
            <tr>
              <td>
                {isDeliveryForm ? (
                  <div>
                    <label htmlFor="firstname">First Name : </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      class="w1"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    ></input>
                  </div>
                ) : (
                  ""
                )}
              </td>
              <td>
                {isDeliveryForm ? (
                  <div>
                    <label htmlFor="lastname">Last Name : </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    ></input>
                  </div>
                ) : (
                  ""
                )}
              </td>
            </tr>
            {isDeliveryForm ? (
              <div>
                <label htmlFor="streetaddress">Street Address : </label>
                <br />
                <input
                  type="text"
                  id="streetaddress"
                  name="streetaddress"
                  required
                  value={streetaddress}
                  onChange={(e) => setStreetaddress(e.target.value)}
                ></input>
              </div>
            ) : (
              ""
            )}

            {isDeliveryForm ? (
              <div>
                <label htmlFor="city">City : </label>
                <br />
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </div>
            ) : (
              ""
            )}
            {isDeliveryForm ? (
              <div>
                <label htmlFor="state">State : </label>
                <br />
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                ></input>
              </div>
            ) : (
              ""
            )}
            {isDeliveryForm ? (
              <div>
                <label htmlFor="email">Email : </label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            ) : (
              ""
            )}

            {isDeliveryForm ? (
              <div>
                <label htmlFor="phonenumber">Phone number(required) : </label>
                <br />
                <input
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  required
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                ></input>
              </div>
            ) : (
              ""
            )}
          </table>

          <button type="submit" class="btn" value="SUBMIT">
            SUBMIT
          </button>
        </form>
        <ToastContainer position="top-center" />
      </div>
      {isAdding ? <Payment deliveryDetails={delivery} /> : <div> </div>}
    </div>
  );
};

export default DeliveryForm;
