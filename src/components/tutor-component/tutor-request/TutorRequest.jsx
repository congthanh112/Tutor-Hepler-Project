import React from 'react'
import "./style.css"




const Card = () => {
    return (
        <div className="col-11">
            <table border="1">
                <tr>
                    <th>No.</th>
                    <th>Content</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum est sit amet urna suscipit, eu ornare arcu suscipit.
                            Morbi leo nunc, placerat non sem id, volutpat dignissim lectus. Cras hendrerit eget quam quis porttitor. Fusce ultricies ligula at congue ultricies.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum vel malesuada massa.
                            Fusce tincidunt elit vel justo volutpat, sit amet feugiat ligula maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                            ac turpis egestas. Sed in pretium magna. In in lectus tempus, ornare urna non, mollis risus. Vestibulum in tristique justo.
                            <a href="#">view all</a>
                            </p>
                    </td>
                    <td className="text">Pending</td>
                </tr>

            </table>
        </div>
    )
}
const TutorRequest = () => {
    return (
        <div>
            <h3>List request</h3>
            <Card />

        </div>
    )
}

export default TutorRequest;