const PackageCard = (packageDetail) => {
  return (
    <div className="col">
      <div class="card border-color rounded-card card-hover product-card custom-bg h-100 text-color-1">
        <div className="card-header text-center">
          <h3>{packageDetail.detail.name}</h3>
        </div>

        <div class="card-body">
          <p className="card-text">
            <b>Fee : Rs {packageDetail.detail.fee}</b>
          </p>
          <p className="card-text">
            <b>Description : {packageDetail.detail.description}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
