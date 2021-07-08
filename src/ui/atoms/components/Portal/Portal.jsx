import React from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from './usePortal';

function Portal({ id, zIndex, children }) {
	const target = usePortal(id, zIndex);
	return createPortal(children, target);
}

export const ClientOnlyPortal = ({ id, zIndex, children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted ? <Portal {...{ id, zIndex, children }} /> : null;
};
