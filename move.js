function move_fraction(fraction){
	pos_changed[0] += dx; // X component
	pos_changed[1] = 0.0;  // Z component
	pos_changed[2] += dy;  // Y component
	if(dx != 0)
		inc_changed[0] += 0;
	if(dy != 0)
		inc_changed[0] += 1;
	inc_changed[1] += 0; 
	inc_changed[2] += 0;
	if(rot>0)
		if(inc_changed[3]<=rot)
			inc_changed[3] += 0.05;
	if(rot<0)
		if(inc_changed[3]>=rot)
			inc_changed[3] -= 0.05;
	if(rot==0){
		if(inc_changed[3]>0.05)
			inc_changed[3] -= 0.05;
		else
			if(inc_changed[3]<(-0.05))
				inc_changed[3] += 0.05;
	}
}

function move_key(key){
	switch(key){
		case 17:
			dy = -0.1;
			dx = 0;
			rot = -0.25;
			break;
		case 18:
			dy = 0.1;
			dx = 0;
			rot = 0.25;
			break;
		case 19:
			dx = -0.1;
			dy = 0;
			rot = 0.25;
			inc_changed[0] = 0;
			break;
		case 20:
			dx = 0.1;
			dy = 0;
			rot = -0.25;
			inc_changed[0] = 0;
			break;
		default:
			rot = 0;
			dx = 0;
			dy = 0;
	}
}
