import React from 'react';
import './Auth.scss'
import { useQuery } from '../../utils/URLSearchParam';

import Registration from './Registration'
import EmailVerification from './EmailVerification';
import TransportType from './TransportType';
import PermitSubmission from './PermitSubmission';
import BusinessDetails from './BusinessDetails';


const Auth = (props) => {
  let query = useQuery();

  React.useEffect(() => {
    props.history.push(`/register?step=${query.get('step') || '1'}`)
  }, [query.get('step')]);

  const onFinishRegistration = (values) => {
    query.set('step', 2)
    props.history.push(`/register?step=${query.get('step')}`)
    console.log({ values })
  }

  const onFinishEmailVerify = (values) => {
    query.set('step', 3)
    props.history.push(`/register?step=${query.get('step')}`)
    console.log({ values })
  }

  const onFinishTransportType = (values) => {
    query.set('step', 4)
    props.history.push(`/register?step=${query.get('step')}`)
    console.log({ values })
  }

  const onFinishPermitSubmission = (values) => {
    query.set('step', 5)
    props.history.push(`/register?step=${query.get('step')}`)
    console.log({ values })
  }

  const onFinishBusinessDetails = (values) => {
    props.history.push(`/bookings`)
    console.log({ values })
  }

  const currentRegistrationView = () => {
    switch (query.get('step')) {
      case "1":
        return (
          <>
            <Registration onFinishRegistration={onFinishRegistration} />
          </>
        )

      case "2":
        return (
          <>
            {/* <Link to="/register?step=1">next</Link> */}
            <EmailVerification onFinishEmailVerify={onFinishEmailVerify} />
          </>
        )

      case "3":
        return (
          <>
            <TransportType onFinishTransportType={onFinishTransportType} />
          </>
        )

      case "4":
        return (
          <>
            <PermitSubmission onFinishPermitSubmission={onFinishPermitSubmission} />
          </>
        )

      case "5":
        return (
          <>
            <BusinessDetails onFinishBusinessDetails={onFinishBusinessDetails} />
          </>
        )

      default:
        return (
          <></>
        )
    }
  }

  return (
    <div className="registrationWrapper">
      <div className="registrationContent">
        {currentRegistrationView()}
      </div>
    </div>)
}

export default Auth