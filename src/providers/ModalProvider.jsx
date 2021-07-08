import React, { useCallback, useReducer } from 'react';

export const Modals = {
	signUp: 'sign-up',
	login: 'login'
};

export const ModalContext = React.createContext({});

export const ModalProvider = ({ children }) => {
	// set state with the passed modalName and toggle the boolean value against that modalName
	// in the modals state if showModal is called from the consuming components
	const [modals, dispatch] = useReducer(
		(state, action) => ({
			...state,
			[action]: !state[action]
		}),
		{}
	);

	const showModal = useCallback((modalName) => {
		dispatch(modalName);
	}, []);

	const value = {
		showModal,
		modals
	};

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

/*
[EXAMPLE USAGE START]
() => {
  const { showModal, modals } = useContext(ModalContext);

  return (
    <>
      <button onClick={() => showModal(Modals['signUp'])}>show modal</button>
      {modals[Modals['signUp']] && (
        <Modal>
          <SignUp
            handleClose={() => {
              showModal(Modals['signUp']);
            }}
          />
        </Modal>
      )}
    </>
  )
}
[EXAMPLE USAGE END]
*/
