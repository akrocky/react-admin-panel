import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart/Chart';
import { Productdata } from '../dummyData';
import './Product.css';

const Product = () => {
    return (
        <div className='product'>
           <div className="productTitleContainer">
               <h1 className="productTitle">Product</h1>
               <Link to="/newProduct
               ">
                   <button className="productAddBtn">
                       Create
                   </button>
               </Link>
           </div>
           <div className="productTop">
<div className="productTopLeft">
    <Chart data={Productdata} dataKey="Sales" title="Sales Performance"/>
</div>
<div className="productTopRight">
    <div className="productInfoTop">
        <img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-iiil0cn21ludapnv2i1v17hgq6-20190926112721.Medi.jpeg" alt="" className="productInfoImg" />
        <span className="productName">Apple Airdot</span>
    </div>
    <div className="productInfoButtom">
        <div className="productInfoItem">
            <span className="productInfoKey">Id:</span>
            <span className="productInfoVale">122</span>
        </div>
        <div className="productInfoItem">
            <span className="productInfoKey">Sales:</span>
            <span className="productInfoVale">2212</span>
        </div>
        <div className="productInfoItem">
            <span className="productInfoKey">Active:</span>
            <span className="productInfoVale">Yes</span>
        </div>
        <div className="productInfoItem">
            <span className="productInfoKey">In Stock:</span>
            <span className="productInfoVale">No</span>
        </div>
    </div>
</div>

           </div>
           <div className="productBottom">
               <from className="productForm">
                   <div className="productFormLeft">
                       <label >ProductName:</label>
                       <input type="text" placeholder='Apple Airpod' />
                       <label >InStock</label>
                       <select name="InStock" id="inStock">
                           <option value="yes">Yes</option>
                           <option value="no">No</option>
                       </select>
                       <label >Active</label>
                       <select name="Active" id="active">
                           <option value="yes">Yes</option>
                           <option value="no">No</option>
                       </select>
                   </div>
                   <div className="productFormRight">
                       <div className="productUpload">
                           <img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-iiil0cn21ludapnv2i1v17hgq6-20190926112721.Medi.jpeg" alt="" className="productUploadImg" />
                           <label for="file">
                               <Publish/>

                           </label>
                           <input type="file" name="file" id="file" style={{display:'none'}} />
                       </div>
                       <button className="productbtn">Update</button>
                   </div>
               </from>
           </div>
        </div>
    );
};

export default Product;