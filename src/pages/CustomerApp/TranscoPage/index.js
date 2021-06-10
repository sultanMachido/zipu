import React from 'react'
import TransoProfile from '../../../widgets/TranscoProfile'
import { mockData_TranscoProfile } from '../../../widgets/TranscoProfile/MOCK_DATA'

function TranscoPage() {
    return (
        <TransoProfile {...mockData_TranscoProfile} />
    )
}

export default TranscoPage
