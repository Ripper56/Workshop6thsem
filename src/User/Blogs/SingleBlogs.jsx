import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../Globals/config';
import { Box,Typography,Divider} from "@mui/material";

export const SingleBlogs = () => {
 
    const{id}=useParams();
    console.log(id);
    const [SingleBlog, setSingleBlog]=React.useState({});
    const getSingleBlog= async()=>{
    let res= await axios.get(`${baseUrl}/Ripper-blog/${id}`);
    setSingleBlog(res.data);
};
React.useEffect(()=>{getSingleBlog();},[]);
    return (
    <div>
        <Box sx={{p:3}}>
            <Typography sx={{fontSize :"20px", fontWeight:"800px",textALign:"center"}}>{SingleBlog.title}</Typography>
            <img src={SingleBlog.image} style={{height:"400px",width:"50%",}}/>
            <Typography sx={{pb:2, pt:2}}>{SingleBlog.author}</Typography>
            <Divider/>
            <Typography sx={{pt:3}}>{SingleBlog.description}</Typography>
        </Box>
    </div>
  );
};
export default SingleBlogs;