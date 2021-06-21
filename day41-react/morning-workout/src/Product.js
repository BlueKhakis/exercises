function Product(props) {
    return (
        <div className="product">
            <img src={props.img_url} alt={props.name}/>
            <div className="name">{props.name}</div>
        </div>
    )
}

export default Product;