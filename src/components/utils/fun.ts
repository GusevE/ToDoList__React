// interface State {
//     symbols: string;
//     color: string;
// }


export const  colorGenerator = () =>  {
    const symbol: string = "0123456789ABCDEF";
    let  color: string = "#";
        for (let i = 0; i < 6; i++) {
        color = color + symbol[Math.floor(Math.random() * 16)];
     }
        return color
};
