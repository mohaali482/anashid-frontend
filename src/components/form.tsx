import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { requestAddNasheed } from "../services/nasheeds";
import { addNasheed } from "../redux/ducks/nasheedSlice";

function form() {
    const dispatch = useDispatch();
    const formRef = useRef<HTMLFormElement>(null)
    const { formErrors } = useSelector((state: RootState) => state.nasheeds)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        dispatch(addNasheed(formData))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} ref={formRef} encType="multipart/form-data">
                <div className="form-group ">
                    <label className="col-sm-2 control-label ">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input name="name" className="form-control" type="text" data-siid="si_input_0" />
                        {formErrors && formErrors.name && formErrors.name.map((element: string) => <span> {element}</span>)}
                    </div>
                </div>
                <div className="form-group ">
                    <label className="col-sm-2 control-label ">
                        Poster
                    </label>                            <div className="col-sm-10">
                        <input name="poster" type="file" />
                        {formErrors && formErrors.poster && formErrors.poster.map((element: string) => <span> {element}</span>)}
                    </div>
                </div>

                <div className="form-group ">
                    <label className="col-sm-2 control-label ">
                        Audio
                    </label>
                    <div className="col-sm-10">
                        <input name="audio" type="file" />
                        {formErrors && formErrors.audio && formErrors.audio.map((element: string) => <span> {element}</span>)}
                    </div>
                </div>
                <div className="form-actions">
                    <button className="btn btn-primary js-tooltip" title="" data-original-title="Make a POST request on the Nasheed Model List resource" type="submit">POST</button>
                </div>
            </form>
        </div>
    )
}

export default form