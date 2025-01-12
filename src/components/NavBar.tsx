import { Typography } from "@mui/material";
import { Link } from "react-router";

const navBar = () => {

  return (<>
    <nav>
      <Link to='/'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography></Link>

      <Link to='/about'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          About
        </Typography></Link>
    </nav>
  </>)

}

export default navBar