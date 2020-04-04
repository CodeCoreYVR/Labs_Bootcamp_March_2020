const knex = require('./db/client');

// Find all countries whose names begin with "b" ignoring case.
const query1 = knex
  .select('*')
  .from('countries')
  .where('name', 'ilike', 'b%');
console.log(query1.toString());
// select * from "countries" where "name" ilike 'b%'
query1.then(countries => console.log(countries));
/** results
 * [{ id: 60, name: 'Bahamas, The', code: 'BHS' },
 * { id: 61, name: 'Bahrain', code: 'BHR' },
 * { id: 62, name: 'Bangladesh', code: 'BGD' },
 * { id: 63, name: 'Barbados', code: 'BRB' },
 * { id: 64, name: 'Belarus', code: 'BLR' },
 * { id: 65, name: 'Belgium', code: 'BEL' },
 * { id: 66, name: 'Belize', code: 'BLZ' },
 * { id: 67, name: 'Benin', code: 'BEN' },
 * { id: 68, name: 'Bermuda', code: 'BMU' },
 * { id: 69, name: 'Bhutan', code: 'BTN' },
 * { id: 70, name: 'Bolivia', code: 'BOL' },
 * { id: 71, name: 'Bosnia and Herzegovina', code: 'BIH' },
 * { id: 72, name: 'Botswana', code: 'BWA' },
 * { id: 73, name: 'Brazil', code: 'BRA' },
 * { id: 74, name: 'British Virgin Islands', code: 'VGB' },
 * { id: 75, name: 'Brunei Darussalam', code: 'BRN' },
 * { id: 76, name: 'Bulgaria', code: 'BGR' },
 * { id: 77, name: 'Burkina Faso', code: 'BFA' },
 * { id: 78, name: 'Burundi', code: 'BDI' }]
 */

// Count how many countries have "central" in their name.
const query2 = knex('countries')
  .count('* as count')
  .where('name', 'ilike', '%central%');
console.log(query2.toString());
// select count(*) as "count" from "countries" where "name" ilike '%central%'
query2.then(count => console.log(count));
/** results
 * [ { count: '5' } ]
 */

// Find all countries whose names begin with the same three letters as their code ignoring case.
const query3 = knex
  .select('*')
  .from('countries')
  .whereRaw(`"name" ilike "code" || '%'`);
console.log(query3.toString());
// select * from "countries" where "name" ilike "code" || '%'
query3.then(countries => console.log(countries));
/** results
 * [ { id: 4, name: 'Early-demographic dividend', code: 'EAR' },
 * { id: 5, name: 'East Asia & Pacific', code: 'EAS' },
 * { id: 20, name: 'IDA total', code: 'IDA' },
 * { id: 38, name: 'Pre-demographic dividend', code: 'PRE' },
 * { id: 47, name: 'Afghanistan', code: 'AFG' },
 * { id: 48, name: 'Albania', code: 'ALB' },
 * { id: 51, name: 'Andorra', code: 'AND' },
 * { id: 54, name: 'Argentina', code: 'ARG' },
 * { id: 55, name: 'Armenia', code: 'ARM' },
 * { id: 57, name: 'Australia', code: 'AUS' },
 * { id: 59, name: 'Azerbaijan', code: 'AZE' },
 * { id: 65, name: 'Belgium', code: 'BEL' },
 * { id: 67, name: 'Benin', code: 'BEN' },
 * { id: 70, name: 'Bolivia', code: 'BOL' },
 * { id: 73, name: 'Brazil', code: 'BRA' },
 * { id: 82, name: 'Canada', code: 'CAN' },
 * { id: 89, name: 'Colombia', code: 'COL' },
 * { id: 90, name: 'Comoros', code: 'COM' },
 * { id: 96, name: 'Cuba', code: 'CUB' },
 * { id: 98, name: 'Cyprus', code: 'CYP' },
 * { id: 99, name: 'Czech Republic', code: 'CZE' },
 * { id: 101, name: 'Djibouti', code: 'DJI' },
 * { id: 103, name: 'Dominican Republic', code: 'DOM' },
 * { id: 104, name: 'Ecuador', code: 'ECU' },
 * { id: 105, name: 'Egypt, Arab Rep.', code: 'EGY' },
 * { id: 108, name: 'Eritrea', code: 'ERI' },
 * { id: 109, name: 'Estonia', code: 'EST' },
 * { id: 110, name: 'Ethiopia', code: 'ETH' },
 * { id: 113, name: 'Finland', code: 'FIN' },
 * { id: 114, name: 'France', code: 'FRA' },
 * { id: 116, name: 'Gabon', code: 'GAB' },
 * { id: 118, name: 'Georgia', code: 'GEO' },
 * { id: 120, name: 'Ghana', code: 'GHA' },
 * { id: 121, name: 'Gibraltar', code: 'GIB' },
 * { id: 129, name: 'Guyana', code: 'GUY' },
 * { id: 133, name: 'Hungary', code: 'HUN' },
 * { id: 135, name: 'India', code: 'IND' },
 * { id: 141, name: 'Israel', code: 'ISR' },
 * { id: 142, name: 'Italy', code: 'ITA' },
 * { id: 143, name: 'Jamaica', code: 'JAM' },
 * { id: 145, name: 'Jordan', code: 'JOR' },
 * { id: 146, name: 'Kazakhstan', code: 'KAZ' },
 * { id: 147, name: 'Kenya', code: 'KEN' },
 * { id: 148, name: 'Kiribati', code: 'KIR' },
 * { id: 150, name: 'Korea, Rep.', code: 'KOR' },
 * { id: 154, name: 'Lao PDR', code: 'LAO' },
 * { id: 160, name: 'Liechtenstein', code: 'LIE' },
 * { id: 162, name: 'Luxembourg', code: 'LUX' },
 * { id: 163, name: 'Macao SAR, China', code: 'MAC' },
 * { id: 174, name: 'Mexico', code: 'MEX' },
 * { id: 181, name: 'Mozambique', code: 'MOZ' },
 * { id: 183, name: 'Namibia', code: 'NAM' },
 * { id: 189, name: 'Nicaragua', code: 'NIC' },
 * { id: 193, name: 'Norway', code: 'NOR' },
 * { id: 195, name: 'Pakistan', code: 'PAK' },
 * { id: 197, name: 'Panama', code: 'PAN' },
 * { id: 200, name: 'Peru', code: 'PER' },
 * { id: 202, name: 'Poland', code: 'POL' },
 * { id: 205, name: 'Qatar', code: 'QAT' },
 * { id: 207, name: 'Russian Federation', code: 'RUS' },
 * { id: 208, name: 'Rwanda', code: 'RWA' },
 * { id: 212, name: 'Saudi Arabia', code: 'SAU' },
 * { id: 213, name: 'Senegal', code: 'SEN' },
 * { id: 222, name: 'Somalia', code: 'SOM' },
 * { id: 232, name: 'Suriname', code: 'SUR' },
 * { id: 234, name: 'Sweden', code: 'SWE' },
 * { id: 236, name: 'Syrian Arab Republic', code: 'SYR' },
 * { id: 239, name: 'Thailand', code: 'THA' },
 * { id: 242, name: 'Tonga', code: 'TON' },
 * { id: 244, name: 'Tunisia', code: 'TUN' },
 * { id: 245, name: 'Turkey', code: 'TUR' },
 * { id: 248, name: 'Tuvalu', code: 'TUV' },
 * { id: 249, name: 'Uganda', code: 'UGA' },
 * { id: 250, name: 'Ukraine', code: 'UKR' },
 * { id: 255, name: 'Uzbekistan', code: 'UZB' },
 * { id: 257, name: 'Venezuela, RB', code: 'VEN' },
 * { id: 259, name: 'Virgin Islands (U.S.)', code: 'VIR' },
 * { id: 261, name: 'Yemen, Rep.', code: 'YEM' } ]
 */
