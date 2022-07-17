import { useRef, useContext, useEffect } from 'react';
import { NavContext } from '../NavContext';


export const useNav = navLinkId => {
	const ref = useRef(null);

	const { setActiveNavLinkId } = useContext(NavContext);

	

	return ref;
};