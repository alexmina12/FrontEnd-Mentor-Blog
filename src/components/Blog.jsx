import illustration from "./../assets/illustration-article.svg";
import icon from "./../assets/image-avatar.webp";

function Blog() {
  return (
    <div className="bg-primary h-screen flex items-center justify-center">
      <div className=" w-4/6 sm:w-5/6 h-5/6 flex">
        <div className="bg-white w-[350px] h-[530px] m-auto border border-[color:hsl(0,_0%,_7%)] rounded-[15px] flex shadow-[10px_10px_hsl(0,_0%,_7%)] hover:cursor-pointer hover:shadow-[17px_17px_hsl(0,_0%,_7%)] hover:transform hover:translate-x-[-7px] hover:translate-y-[-7px] transition-[transform, shadow] duration-700 ease-in-out">
          <div className=" w-[90%] h-[90%] m-auto">
            <img
              src={illustration}
              className="w-full border rounded-[10px]"
              alt="Illustration"
            />
            <div>
              <p className="my-4 bg-primary border rounded-[5px] w-fit px-3 py-1 font-bold">
                Learning
              </p>
              <p className="font-medium my-2">Published 21 Dec 2023</p>
              <h1 className="my-4 text-2xl font-bold hover:text-primary transition-text duration-300">
                HTML & CSS foundations
              </h1>
              <p className="mt-3 text-[color:hsl(0,_0%,_50%)] text-[16px] font-Figtree">
                These languages are the backbone of every website, defining
                structure, content, and presentation.
              </p>
              <div className="flex justify-start items-center mt-4">
                <img src={icon} className="w-10 h-10" alt="Author Icon" />
                <p className="ml-4 font-bold">Greg Hooper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
