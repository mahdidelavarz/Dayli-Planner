import { Icon } from "@iconify/react/dist/iconify.js";
import Layout from "../Layout/Layout";

function Home() {
  return (
    <Layout>
      <div className="w-full h-full grid grid-cols-12 grid-rows-12 gap-4">
        <div className="col-span-3 row-span-4 bg-gray-50 opacity-50 flex justify-center items-center text-[120px] rounded-xl text-gray-800 cursor-pointer">
          <Icon icon="solar:widget-add-broken" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
