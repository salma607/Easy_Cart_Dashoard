import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
export default function sidebar() {
  return (
<div className="w-100 text-stone-950 p-4 border-2 border-lime-400">
          <h2 className="text-4xl font-bold mb-6  ">Easy Cart Dashboard</h2>
          <hr className="h-0.5 bg-zinc-200"></hr>
          <div className="m-5">
          <ul>
            <div className=" hover:bg-lime-200 rounded-md w-full  ">
              <li className="mb-4">
                <a href="#link1" className=" text-[30px] ">
                 Link 1
                </a>
              </li>
            </div>
            <div className=" hover:bg-lime-200 rounded-md w-full">
              <li className="mb-4">
                <a href="#link1" className=" text-[30px] ">
                  Link 1
                </a>
              </li>
            </div>
            <div className=" hover:bg-lime-200 rounded-md w-full">
              <li className="mb-4">
                <a href="#link1" className=" text-[30px] ">
                  Link 1
                </a>
              </li>
            </div>
            <div className=" hover:bg-lime-200 rounded-md w-full">
              <li className="mb-4">
                <a href="#link1" className=" text-[30px] ">
                  Link 1
                </a>
              </li>
            </div>
          </ul>
          <div className=" ">
          <div className="p-5">
          <Stack direction="row" spacing={2} justifyContent="center">
      <Button 
      variant="outlined" 
      sx={{ borderColor:'#84cc16', color: 'black',borderWidth: '2px','&:hover': { backgroundColor: '#84cc16' }}}
      startIcon={<LogoutIcon />}>
        Logout
      </Button>
    </Stack>
    </div>
    </div>
          </div>
        </div>

);
}