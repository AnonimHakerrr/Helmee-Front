 import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo/home.png'; 
const ProfileWho = () => {
  
  return (
    <>
 

 <div className="flex flex-grow   justify-between py-4 px-20 md:px-6 2xl:px-11">
        {/* channel photo */}
              <div className="relative -ml-[18%] bg-[#5BC0EB] w-[55rem] h-[55rem] rounded-full   dark:bg-primary  mr-3">
                  <div className="relative top-[120px] left-[47%]"> <img
                      className="rounded-full w-60 h-60"
                      src={Logo}
                      alt=""
                  />

                      {/* channel info */}
                      <div className="text">
                          {/* Channel title */}
                          <h1 className="text-black text-left font-bold my-8  text-3xl mb-2">Олександр Солти</h1>

                      </div>
                  </div>
          </div>
          
          <div className="flex page mt-6">
          <Outlet></Outlet>
        </div>
        </div>
       
      
      
 
    </>
  );
};

export { ProfileWho };
