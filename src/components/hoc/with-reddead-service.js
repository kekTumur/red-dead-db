import React from 'react'
import { ReddeadConsumer } from '../reddead-service-context';

const withRedeadService = () => (Wrapper) => {
    return (props) => {
       return (
           <ReddeadConsumer>
               {
                   (reddeadService) => {
                       return (
                           <Wrapper {...props} reddeadService={reddeadService} />
                       );
                   }
               }
           </ReddeadConsumer>
       );
    }
}

export default withRedeadService;