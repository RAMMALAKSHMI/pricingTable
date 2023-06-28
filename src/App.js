import './App.css';

function App() {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-4'>
        <div className='card mb-5 card-lg-0'>
          <div className='card-body'>            
              <h5 className='card-title text-muted text-center'>FREE</h5>
              <h1 className='card-price text-center'>$0<span className='month'> /month</span></h1>
              <hr/>
              <ul className='list-group fa-ul'>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Single User</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>5GB Storage</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Unlimited Public Projects</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Unlimited Private Projects</span></li>
                <li className='list-group-item text-muted'><span><i className="fas fa-times mr-2"></i>Dedicated Phone Support</span></li>
                <li className='list-group-item text-muted'><span><i className="fas fa-times mr-2"></i>Community Access</span></li>
                <li className='list-group-item text-muted'><span><i className="fas fa-times mr-2"></i>Free Subdomain</span></li>
                <li className='list-group-item text-muted'><span><i className="fas fa-times mr-2"></i>Monthly Status Reports</span></li>

              </ul>
              <button type="button" className="btn btn-primary btn-lg btn-block">Enroll</button>

            </div>
          </div>
        </div>

        <div className='col-lg-4'>
        <div className='card mb-5 card-lg-0'>
          <div className='card-body'>            
              <h5 className='card-title text-muted text-center'>PLUS</h5>
              <h1 className='card-price text-center'>$9<span className='month'> /month</span></h1>
              <hr/>
              <ul className='list-group fa-ul'>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i><strong>5 User</strong></span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>50GB Storage</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Unlimited Public Projects</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Community Access</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Unlimited Private Projects</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Dedicated Phone Support</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Free Subdomain</span></li>
                <li className='list-group-item text-muted'><span><i className="fas fa-times mr-2"></i>Monthly Status Reports</span></li>
              </ul>
              <button type="button" className="btn btn-primary btn-lg btn-block">Enroll</button>

            </div>
          </div>
        </div>

        <div className='col-lg-4'>
        <div className='card mb-5 card-lg-0'>
          <div className='card-body'>            
              <h5 className='card-title text-muted text-center'>PRO</h5>
              <h1 className='card-price text-center'>$49<span className='month'> /month</span></h1>
              <hr/>
              <ul className='list-group fa-ul'>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i><strong>Unlimited Users</strong></span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>150GB Storage</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Unlimited Public Projects</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Community Access</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Unlimited Private Projects</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Dedicated Phone Support</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i><strong>Unlimited </strong>Free Subdomain</span></li>
                <li className='list-group-item'><span><i className="fas fa-check mr-2"></i>Monthly Status Reports</span></li>

              </ul>
              <button type="button" className="btn btn-primary btn-lg btn-block">Enroll</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
