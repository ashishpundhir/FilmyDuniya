import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
 
      <div className="sticky z-10  top-0 header text-red-500 flex justify-between items-center text-3xl font-bold p-3 border-b-2 border-gray-500  ">
        <Link to={"/"}>
          <span>
            Filmy<span className="text-white font-medium">Verse</span>
          </span>
        </Link>

        <span>
            <img src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-popcorn-movie-film-png-image_2704218.jpg" className="w-10" alt="" />
        </span>

        <Button>
          <Link to={"/addmovie"}>
            <span className="text-lg p-3 text-white flex items-center cursor-pointer">
              <AddIcon className="mr-2" color="secondary" /> Add Movie
            </span>
          </Link>
        </Button>
      </div>

  );
};

export default Header;
