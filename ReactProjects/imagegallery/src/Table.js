import Salaar from './asset/Salaar.jpg';
import Bahubali from './asset/Bahubali.jpg';
import Animal from './asset/Animal.jpg';
import KGF from './asset/KGF.jpg';
import Hanuman from './asset/Hanuman.jpg';
import Shaandaar from './asset/Shaandaar.jpg';
import './Style.css';

function Table(){
    return(
        <>
            <hr />
            <h2>Image Gallery using the Table.js</h2>
            <table className='table'>
                <tr>
                    <td><img src={Salaar} alt="Sallar" /></td>
                    <td><img src={Bahubali} alt="Bahubali" /></td>
                    <td><img src={Animal} alt="Animal" /></td>
                    <td><img src={KGF} alt="KGF" /></td>
                    <td><img src={Hanuman} alt="Hanuman" /></td>
                    <td><img src={Shaandaar} alt="Shaandaar" /></td>
                </tr>
                <tr>
                    <td><h3>Salaar</h3></td>
                    <td><h3>Bahubali</h3></td>
                    <td><h3>Animal</h3></td>
                    <td><h3>KGF</h3></td>
                    <td><h3>Hanuman</h3></td>
                    <td><h3>Shaandaar</h3></td>
                </tr>
                <tr>
                    <td><div>( Thriller )</div></td>
                    <td><div>( Fantasy )</div></td>
                    <td><div>( Crime )</div></td>
                    <td><div>( Thriller )</div></td>
                    <td><div>( Adventure )</div></td>
                    <td><div>( Comedy )</div></td>
                </tr>
            </table>
            <hr />
        </>
    );
}

export default Table;