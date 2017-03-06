import React, { Component, PropTypes } from 'react';


export default class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div class="tile is-parent">
         <article class="tile is-child box">
           <div class="content">
             <p class="title">Equities</p>
             <p class="subtitle">With even more content</p>
             <div class="content">
               <table class="table">
                 <thead>
                   <tr>
                     <th><abbr title="Position">Symbol</abbr></th>
                     <th>Time</th>
                     <th><abbr title="Price">Price</abbr></th>
                     <th><abbr title="Change">CHG</abbr></th>
                     <th><abbr title="Change Percent">% CHG</abbr></th>
                     <th><abbr title="Days Low">DAY LOW</abbr></th>
                     <th><abbr title="Days High">DAY HIGH</abbr></th>
                     <th><abbr title="Volume">VOL</abbr></th>
                     <th><abbr title="Avg Volume">AVG VOL</abbr></th>
                     <th><abbr title="Market Cap">MKT</abbr></th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th>TDOC</th>
                     <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                     </td>
                     <td>38</td>
                     <td>23</td>
                     <td>12</td>
                     <td>3</td>
                     <td>68</td>
                     <td>36</td>
                     <td>+32</td>
                     <td>81</td>
                   </tr>
                   <tr>
                     <th>AAPL</th>
                     <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
                     <td>38</td>
                     <td>20</td>
                     <td>11</td>
                     <td>7</td>
                     <td>65</td>
                     <td>36</td>
                     <td>+29</td>
                     <td>71</td>
                   </tr>
                   <tr>
                     <th>MSFT</th>
                     <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
                     <td>38</td>
                     <td>19</td>
                     <td>13</td>
                     <td>6</td>
                     <td>69</td>
                     <td>35</td>
                     <td>+34</td>
                     <td>70</td>
                   </tr>
                   <tr>
                     <th>GOOG</th>
                     <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
                     <td>38</td>
                     <td>19</td>
                     <td>9</td>
                     <td>10</td>
                     <td>71</td>
                     <td>41</td>
                     <td>+30</td>
                     <td>66</td>
                   </tr>
                   <tr>
                     <th>NFLX</th>
                     <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>
                     <td>38</td>
                     <td>19</td>
                     <td>9</td>
                     <td>10</td>
                     <td>49</td>
                     <td>35</td>
                     <td>+14</td>
                     <td>66</td>
                   </tr>
                   <tr>
                     <th>F</th>
                     <td><a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a></td>
                     <td>38</td>
                     <td>18</td>
                     <td>9</td>
                     <td>11</td>
                     <td>59</td>
                     <td>41</td>
                     <td>+18</td>
                     <td>63</td>
                   </tr>
                   <tr>
                     <th>ORCL</th>
                     <td><a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a></td>
                     <td>38</td>
                     <td>16</td>
                     <td>14</td>
                     <td>8</td>
                     <td>65</td>
                     <td>51</td>
                     <td>+14</td>
                     <td>62</td>
                   </tr>
                   <tr>
                     <th>8</th>
                     <td><a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a></td>
                     <td>38</td>
                     <td>16</td>
                     <td>12</td>
                     <td>10</td>
                     <td>63</td>
                     <td>50</td>
                     <td>+13</td>
                     <td>60</td>
                     <td></td>
                   </tr>
                   <tr>
                     <th>SPY</th>
                     <td><a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a></td>
                     <td>38</td>
                     <td>14</td>
                     <td>9</td>
                     <td>15</td>
                     <td>41</td>
                     <td>55</td>
                     <td>−14</td>
                     <td>51</td>
                     <td></td>
                   </tr>
                   <tr>
                     <th>GM</th>
                     <td><a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a></td>
                     <td>38</td>
                     <td>12</td>
                     <td>14</td>
                     <td>12</td>
                     <td>59</td>
                     <td>53</td>
                     <td>+6</td>
                     <td>50</td>
                     <td></td>
                   </tr>
                 </tbody>
               </table>
              </div>
           </div>
         </article>
       </div>
    )
  }
}
