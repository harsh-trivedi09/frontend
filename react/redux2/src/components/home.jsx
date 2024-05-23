function Home() {
    return (  <>
    <div>
        <img src="https://cdn-icons-png.freepik.com/512/5163/5163709.png" style={{height:150}} alt="" />
    </div>
    <h1>this is home component</h1>
    <div className="cart-wrapper">
        <span className="img-Wrapper item " >
            <img src="https://m.media-amazon.com/images/I/51AHRgN28wL.jpg" style={{height:150}} alt="" />
        </span>
        <span className="img-Wrapper item ">
            this is phone
        </span>
        <span className="img-Wrapper item">
            <button> buy now</button>
        </span>
    </div>
    </>);
}

export default Home;