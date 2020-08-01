import React from "react";

import { RingSpinner } from "react-spinners-kit";

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        const { loading } = this.state;
        return (
            <div>
                <RingSpinner
                    size={45}
                    color="#686769"
                    loading={loading}
                />
            </div>
        );
    }
}

export default Spinner;