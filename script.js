(() => {
		const time = document.querySelectorAll('.time')
		const date = document.querySelectorAll('.date')
		const position = document.getElementById('position')
		const sound_div = document.getElementById('sound')
		const sound_icon = document.getElementById('sound_icon')
		let lastchar

		let sound
		sound_div.addEventListener('click', () => {
			if(sound !== null){
				sound  = null
				sound_icon.innerHTML = '&#xf6a9; <span>Unmute tick</span>'
			}
			else{
				sound = new Audio('./tink.wav')
				sound_icon.innerHTML = '&#xf028; <span>Mute tick</span>'
			}
		})

		const month = { 0: 'January', 1: 'February', 2: 'March',
		                3: 'April', 4: 'May', 5: 'June',
                        6: 'July', 7: 'August', 8: 'September',
			            9: 'October', 10: 'November', 11: 'December' }

		const days = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday',
		               3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' }

		const positions = { '1': 'st', '2': 'nd', '3': 'rd' }

		addZeroCheck = number => number = (number < 10) ? `0${number}` : number

	    function getandFormatTime(){
	    	const date = new Date()

	    	if(date.getHours() > 12){
	    		time[0].textContent = addZeroCheck(date.getHours() - 12)
	    		time[3].textContent = 'PM'
	    	}

	    	else if(date.getHours() === 0){
	    		time[0].textContent = 12
	    		time[3].textContent = 'AM'
	    	}

	    	else{
	    		time[0].textContent = addZeroCheck(date.getHours())
	    		time[3].textContent = 'AM'
	    	}

	    	time[1].textContent = addZeroCheck(date.getMinutes())
	    	time[2].textContent = addZeroCheck(new Date().getSeconds())

	    	if(sound){
	    		sound.volume = 0.1;
	    		sound.play()
	    		sound.currentTime = 0
	    	}
	    }

	    date[0].textContent = days[new Date().getDay()]
	    date[1].textContent = new Date().getDate()

	    lastchar = date[1].textContent.slice(-1)
	    position.textContent = (parseInt(lastchar) < 4) ? positions[lastchar] : 'th'

	    date[2].textContent = month[new Date().getMonth()]
	    date[3].textContent = new Date().getFullYear()

	    getandFormatTime()
	    setInterval(getandFormatTime, 1000)

	})()