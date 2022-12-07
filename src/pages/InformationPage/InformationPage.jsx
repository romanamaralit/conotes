import { checkToken } from "../../utilities/users-service"
export default function
InformationPage() {
    const handleCheckToken = async function () {
        const expDate = await checkToken()
        console.log('expDate is: ', expDate)
    }
    return (
        <>
        <h1>InformationPage</h1>
        <button onClick={handleCheckToken}>Check when my Login Expires</button>
        </>
    )
}

