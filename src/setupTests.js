import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {configure} from "enzyme";
const DB = {
    Name: ["Gentry Eggleston","Dempsey Stivers","Jacori Hiner","Kainoa Dodds","Pablo Mahoney","Izabela Bolt","Jovanna Marmolejo","Macayla Townley","Auden Gilmer","Jordany Wingert","Mena Meisner","Chiamaka Songer","Jabari Chadwick","Bliss Berglund","Eliezer Bartholomew","Unknown Fant","Alaska Stebbins","Citlali Cousins","Lexus Button","Subhan Harner","Huntley Balderrama","Ellen Yarbrough","Jaziah Mckeever","Alissandra Mower","Cassadee Socha","West Sparkman","Gionna Ridings","Silas Carlson","Rosalie Roberson","Thatcher Shaver","Deon Oliva","Milena Dooley","Tyus Mchale","Clayton Hartman","Jahlil Lanham","Passion Wolter","Suhani Delk","Khari Johansen","Infinity Mcgaughey","Clay Bragg","Rishi Wharton","Ishani Dee","Kane Yu","Eliza Mclaughlin","Sean Cross","Kasandra Alva","Jaiyana Hoggard","Ina Bixler","Rain Peter","Devante Loving"],
},
    fetch = function(url, params) {
        if(url.indexOf("Name") !== -1) {
                return ({json: () => DB.Name});
        }
        else {
                return (`Mock not found - ${url}`);
        }
    };

global.fetch = fetch;

configure({adapter: new Adapter()});
