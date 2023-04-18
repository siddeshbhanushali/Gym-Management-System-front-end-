import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-white">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-3">FITNESS SPACE</h5>

                  <p>
                    Being a 24/7 gym is one of our best amenities because we can
                    offer our members unrestricted freedom of access from sun up
                    to sun down and everywhere in between. You no longer have to
                    worry about cramming in gym time before we close!
                  </p>
                </div>

               


                

               
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Register for free</span>
                <Link to="/customer/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded"
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2023 Copyright

                 
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
