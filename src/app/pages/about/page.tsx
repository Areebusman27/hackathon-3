import blog from "../Rectangle 68.png"
import Image from "next/image";
import bg from "../Rectangle 1.png"

export default function Blog() {
    const posts = [
      {
        id: 1,
        title: "Going all-in with millennial design",
        date: "14 Oct 2022",
        category: "Wood",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: blog
      },
      {
        id: 2,
        title: "Exploring new ways of decorating",
        date: "14 Oct 2022",
        category: "Handmade",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/example-image2.jpg",
      },
      {
        id: 3,
        title: "Handmade pieces that took time to make",
        date: "14 Oct 2022",
        category: "Wood",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        image: "/example-image3.jpg",
      },
    ];
  
    return (
        <div>
            {/* blogs hero */}
            <div className="relative  py-16 font-[sans-serif]">
  <div className="absolute inset-0">
    <Image
      src={bg}
      alt="Background Image"
      className="w-full h-full object-cover opacity-100"
    />
  </div>
  <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
      BLOGS
    </h1>
    <p className="text-lg md:text-xl mb-12">
      HOME -- Blogs
    </p>
    
  </div>
</div>

{/* blogs */}
<div className="blog-container">
        <div className="blog-posts">
          
            <div  className="post-card">
              <Image src={blog} alt="" className="post-image" />
              <div className="post-content">
                <div className="post-meta">
                  <span>Admin</span>
                  <span>"14 Oct 2022"</span>
                  
                </div>
                <h2 className="post-title">WOOD</h2>
                <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."</p>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
            <div  className="post-card">
              <Image src={blog} alt="" className="post-image" />
              <div className="post-content">
                <div className="post-meta">
                  <span>Admin</span>
                  <span>"14 Oct 2022"</span>
                  
                </div>
                <h2 className="post-title">WOOD</h2>
                <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."</p>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
            <div  className="post-card">
              <Image src={blog} alt="" className="post-image" />
              <div className="post-content">
                <div className="post-meta">
                  <span>Admin</span>
                  <span>"14 Oct 2022"</span>
                  
                </div>
                <h2 className="post-title">WOOD</h2>
                <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."</p>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
          
        </div>
  
        <aside className="sidebar">
          <div className="widget categories">
            <h3>Categories</h3>
            <ul>
              <li>Crafts <span>2</span></li>
              <li>Design <span>8</span></li>
              <li>Handmade <span>7</span></li>
              <li>Interior <span>1</span></li>
              <li>Wood <span>6</span></li>
            </ul>
          </div>
          <div className="widget recent-posts">
            <h3>Recent Posts</h3>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                 <Image src={blog} alt="aa"></Image>
                  <div>
                    <p>1234</p>
                    <span>1234</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
  
        <div className="pagination">
          <button className="page-number active">1</button>
          <button className="page-number">2</button>
          <button className="page-number">3</button>
          <button className="page-number next">Next</button>
        </div>
      </div>
        </div>
     
    );
  }
  