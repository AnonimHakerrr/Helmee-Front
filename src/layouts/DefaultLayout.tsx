import { useState } from "react";
import Header from "../components/Header/Header";

 
const DefaultLayout = () => {
 
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  
  return (
    <div className="dark:bg-body dark:text-bodydark ">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
       
        {/* <!-- ===== Content Area Start ===== --> */}
         
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="bg-body">
            <div className="mx-auto">
               
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
     
   
  );
};
export default DefaultLayout;
