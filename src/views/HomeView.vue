<template>
	<main>
		<div class="content-body" style="margin-left: 10rem;">
			<!-- row -->
			<div class="container-fluid">
				<div class="row">

					<div class="row justify-content-center">
						<div class="col-xl-5 col-xxl-6 col-md-6 ">
							<div class="card">
								<div class="card-header border-0 pb-0">
									<h4 class="fs-20 font-w600 m-auto">Actual Compliance Status</h4>
								</div>
								<div class="card-body text-center position-relative">
									<button type="button"
										class="btn btn-primary btn-sm position-absolute scan_btn top-0">Scan
										Node</button>

									<div class="rounded-circle bg-primary d-flex justify-content-center align-items-center m-auto"
										style="width: 200px; height: 200px; ">
										<div
											class="rounded-circle bg-white w-75 h-75 d-flex justify-content-evenly align-items-center">
											<h2 class="text-center text-dark ">43%</h2>
										</div>
									</div>

									<div class="mt-4">
										<p class="mb-2 d-flex text-dark font-w500  fs-14">Pass (60%)
										</p>
										<div class="progress mb-3" style="height:15px">
											<div class="progress-bar bg-primary progress-animated"
												style="width:85%; height:15px;" role="progressbar">
												<span class="sr-only">60% Complete</span>
											</div>
										</div>
										<p class="mb-2 d-flex text-dark font-w500  fs-14">Error (30%)
										</p>
										<div class="progress mb-3" style="height:15px">
											<div class="progress-bar bg-warning progress-animated"
												style="width:90%; height:15px;" role="progressbar">
												<span class="sr-only">30% Complete</span>
											</div>
										</div>
										<p class="mb-2 d-flex  text-dark font-w500 fs-14">Failed (10%)
										</p>
										<div class="progress" style="height:15px">
											<div class="progress-bar bg-danger progress-animated"
												style="width:65%; height:15px;" role="progressbar">
												<span class="sr-only">10% Complete</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-5 col-xxl-6 col-md-6">
							<div class="card">
								<div class="card-header border-0 pb-0">
									<h4 class="fs-20 font-w600 m-auto">Desired Compliance Status</h4>
								</div>
								<div class="card-body text-center">

									<div class="rounded-circle bg-body-secondary  d-flex justify-content-center align-items-center m-auto"
										style="width: 200px; height: 200px;">
										<div
											class="rounded-circle bg-white w-75 h-75 d-flex justify-content-evenly align-items-center">
											<p class="text-center text-dark">
											<h2>100%</h2>
											</p>
										</div>
									</div>

									<div id="external-events" class="my-3">
										<p>Set Desired Compliance</p>
										<div class="external-event btn-primary light" data-class="bg-primary"><i
												class="fa fa-move"></i><span>Set 1</span></div>
										<div class="external-event btn-warning light" data-class="bg-warning"><i
												class="fa fa-move"></i> Not
											Set 2
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-6 col-xxl-6 col-md-6">
						<div class="card">
							<div class="card-header border-0 pb-0">
								<h4 class="fs-5 font-w600 m-auto">Detailed Report Table</h4>
								<button type="button" class="btn btn-primary btn-sm ">Remediate</button>

							</div>
							<div class="card-body text-center">

								<div class="table-responsive">
									<table id="example5"
										class="table table-striped patient-list mb-4 dataTablesCard fs-14">
										<thead>
											<tr>

												<th>Node Name</th>
												<th>Profile</th>
												<th>Compliance</th>
												<th>Last scanned date</th>

											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="text-primary">gabriel</td>
												<td class="text-primary">Uk Uncle</td>
												<td>123456.8643</td>
												<td>22 Mar 2021</td>
											</tr>

											<tr>
												<td class="text-primary">gabriel</td>
												<td class="text-primary">Uk Uncle</td>
												<td>123456.8643</td>
												<td>22 Mar 2021</td>
											</tr>
											<tr>
												<td class="text-primary">gabriel</td>
												<td class="text-primary">Uk Uncle</td>
												<td>123456.8643</td>
												<td>22 Mar 2021</td>
											</tr>
											<tr>
												<td class="text-primary">gabriel</td>
												<td class="text-primary">Uk Uncle</td>
												<td>123456.8643</td>
												<td>22 Mar 2021</td>
											</tr>
											<tr>
												<td class="text-primary">gabriel</td>
												<td class="text-primary">Uk Uncle</td>
												<td>123456.8643</td>
												<td>22 Mar 2021</td>
											</tr>
											<tr>
												<td class="text-primary">gabriel</td>
												<td class="text-primary">Uk Uncle</td>
												<td>123456.8643</td>
												<td>22 Mar 2021</td>
											</tr>

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-xxl-6 col-md-6">
						<div class="card">
							<div class="card-header border-0 pb-0">
								<h4 class="fs-5 font-w600 m-auto">Desired Compliance Status</h4>
								<button type="button" class="btn btn-primary btn-sm ">Remediate</button>

							</div>
							<div class="card-body text-center">

								<div class="table-responsive">
									<div class="card-header d-sm-flex d-block border-0 pb-0">
										<div class="card-action card-tabs mt-3 mt-sm-0 mt-3 mt-sm-0">
											<ul class="nav nav-tabs" role="tablist">
												<li class="nav-item">
													<a class="nav-link active" data-bs-toggle="tab" href="#monthly"
														role="tab">
														Monthly
													</a>
												</li>
												<li class="nav-item">
													<a class="nav-link" data-bs-toggle="tab" href="#weekly" role="tab">
														Weekly
													</a>
												</li>
												<li class="nav-item">
													<a class="nav-link" data-bs-toggle="tab" href="#today" role="tab">
														Today
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="card-body ps-2 pe-3 pb-2">
										<div class="tab-content">
											<div class="tab-pane fade show active" id="monthly">
												<div class="m-auto">
													<apexchart width="600" type="line" :options="options"
														:series="series">
													</apexchart>

												</div>

											</div>
											<div class="tab-pane fade" id="weekly">
												<apexchart width="600" type="line" :options="options" :series="series">
												</apexchart>
											</div>
											<div class="tab-pane fade" id="today">
												<apexchart width="600" type="line" :options="options" :series="series">
												</apexchart>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</main>
</template>
<script>

export default {
	name: "Dashboard",
	data: function () {
		return {
			options: {
				chart: {
					id: 'vuechart-example'
				},
				xaxis: {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
				}
			},
			series: [{
				name: 'series-1',
				data: [30, 40, 45, 50, 49, 60, 70, 91]
			}]
		}
	}
}
</script>
<style>
#apexchartsvuechart-example {
	width: auto !important;
}
</style>
