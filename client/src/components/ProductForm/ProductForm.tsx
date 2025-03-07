const ProductForm = () => {
    return (
        <fieldset className="fieldset w-auto bg-base-100 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend">New product form</legend>

            <label className="fieldset-label">Item Name</label>
            <input type="text" className="input" placeholder="Thinkpad t480" />

            <label className="fieldset-label">Price</label>
            <input type="number" className="input" placeholder="R.s 76000" />

            <label className="fieldset-label">Image URL</label>
            <input type="text" className="input" placeholder="gitty.img-url.com/ddz8" />

            <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
    )
}

export default ProductForm
