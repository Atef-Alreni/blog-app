import '../../styles/homepage/CallToAction.css';

function CallToAction() {
    return (
        <div className="call-to-action-container">
            <h1>Like what you see?</h1>
            <div>
                <form action="" method="get" className="redirect-form">
                    <input type="email" name="" className="email" placeholder="Email"/>
                    <input type="button" value="Sign up for free" className="redirect-button"/>
                </form>
            </div>
        </div>
    )
}

export default CallToAction
