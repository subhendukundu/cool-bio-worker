import * as response from '../../lib/responses'
import notFound from '../../lib/notfound'
import template from '../../lib/template'

export const route = '/(?<id>.+)/booking'

const booking = async ({ params }) => {
	const { id } = params
	const bio = await cool_bio_profiles.get(id, 'json')
	console.log(bio)
	if (!bio) {
		const notfoundtemplate = notFound({
			title: 'Cool!',
			text: `We would love to have @${id} on cool.bio soon!`,
		})
		return response.notFound(notfoundtemplate)
	}
	const { name, image, userName } = bio
	const html = template({
		body: `
			<div class="container">
				<h1 class="header center">${name}</h1>
				<h4 class="header center">@${userName}</h4>
				<div class="row">
					<div class="col s12 m6 offset-m3">
						<div class="container">
							<div class="card">
								<div class="card-content">
									<div class="row">
										<div class="input-field col s12">
											<span class="card-title">Book an Appointment</span>
										</div>
									</div>
									<form id="contactForm">
										<fieldset class="row">
											<div class="input-field col s12">
												<input type="text" class="datepicker" id="datepicker>
												<label for="datepicker">Pick a Date</label>
											</div>
											<div class="input-field col s12">
												<input type="text" class="timepicker" id="timepicker">
												<label for="timepicker">Pick a Time</label>
											</div>
											<div class="input-field col s12">
												<input id="name" type="text" class="validate">
												<label for="name">Name</label>
											</div>
											<div class="input-field col s12">
												<input id="email" type="email" class="validate">
												<label for="email">Email</label>
											</div>
											<div class="input-field col s12">
												<textarea id="aboutYou" class="materialize-textarea"></textarea>
												<label for="aboutYou">About You</label>
											</div>
										</fieldset>
										<button class="btn waves-effect waves-light" type="submit" name="action">
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`,
		title: `Appointment with @${id}`,
		links:
			'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">',
		script: `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
				<script>
					document.addEventListener('DOMContentLoaded', function () {
						var allowedDates = new Date(new Date().getTime()+(14*24*60*60*1000));
						var options = {
							defaultDate: new Date(),
							setDefaultDate: true,
							minDate: new Date(),
							maxDate: allowedDates
						};
						var elems = document.querySelector('.datepicker');
						var instance = M.Datepicker.init(elems, options);
						// instance.open();
						instance.setDate(new Date(2018, 2, 8));
					});
				</script>
				<script>
					document.addEventListener('DOMContentLoaded', function() {
						var timeOptions = {defaultTime: 'now'}
						var timepickerElems = document.querySelectorAll('.timepicker');
    					var timepickerElemsInstances = M.Timepicker.init(timepickerElems, timeOptions);
					});
					var form = document.forms[0];
					form.addEventListener("submit", function(event) {
						event.preventDefault();
						var data = $('#contactForm').serializeArray();

						console.log(data);
					});
				</script>
			`,
	})
	return response.html(html)
}

export default booking
