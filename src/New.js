// import gif from './data/data';
import datagif from './data/datagif';
// import Title from './gif/title-comp';

// const Coba = ({item}) => <li>{item}</li>
// const items = ['a', 'b', 'c']

function New(){
    console.log(process.env.REACT_APP_GIPHY_KEY);
    // const Mylist = items.map(item => <Coba item={item} />)
    return(
        
        <div>
        {/* <ul>{Mylist}</ul> */}
        <div>
            {datagif.map((gif, index) => (
            <div key={index}>
                <img src={gif.url} alt=""/>
            </div>
            ))}
        </div>
        </div>
    );
}
export default New;