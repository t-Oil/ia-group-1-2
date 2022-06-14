import { isEmpty } from 'lodash'

const PostItems = ({ items }: { items: [{ id: number, userId: number, title: string, body: string }] }) => {
  return (
    <>
      {
        !isEmpty(items) ? items.map((item) => {
          return (
            <tr key={item.id}>
              <td className="px-4 py-3 border">
                {item.id}
              </td>
              <td className="px-4 py-3 border">
                {item.userId}
              </td>
              <td className="px-4 py-3 border">
                {item.title}
              </td>
              <td className="px-4 py-3 border">
                {item.body}
              </td>
            </tr>
          )
        }) : (
          <tr>
            <td colSpan={4}>data not found.</td>
          </tr>
        )
      }
    </>
  )
}

export default PostItems;