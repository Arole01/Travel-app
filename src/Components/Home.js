const Home = () => {
    return (
        <section className="home" id="home">
            <div className="content">
                <h3>adventure is worthwhile</h3>
                <p>discover new places with us, adventure awaits</p>
                <a href="#" className="btn">discover more</a>
            </div>

            <div className="controls">
                <span className="vid-btn active" data-src="https://res.cloudinary.com/dh549anka/video/upload/v1756236378/video1_aljf6e.mp4"/>
                <span className="vid-btn" data-src="https://res.cloudinary.com/dh549anka/video/upload/v1756236310/video2_eg7xnb.mp4"/>
                <span className="vid-btn" data-src="https://res.cloudinary.com/dh549anka/video/upload/v1756236390/video3_h8vudu.mp4"/>
                <span className="vid-btn" data-src="https://res.cloudinary.com/dh549anka/video/upload/v1756236339/video4_dorpkv.mp4"/>
                <span className="vid-btn" data-src="https://res.cloudinary.com/dh549anka/video/upload/v1756236348/video5_y7sqks.mp4"/>
                <span className="vid-btn" data-src="https://res.cloudinary.com/dh549anka/video/upload/v1756236369/video6_dkz3gw.mp4"/>
            </div>

            <div className="video-container">
                <video src="https://res.cloudinary.com/dh549anka/video/upload/v1756236378/video1_aljf6e.mp4"
                        id="video-slider" loop autoPlay muted/>
            </div>
        </section>
    )
}


export default Home;