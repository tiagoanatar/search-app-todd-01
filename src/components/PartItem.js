import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

export const PartItem = ({ item, parts, setParts }) => {

  // selected state
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (parts.includes(item['Catalog or Item Number']) === true){
      setSelected(true)
    } else {
      setSelected(false)
    }
  },[parts, item])

  return (
    <>
    <style type="text/css">
      {`
      .btn-wolter1 {
        background-color: #29a28b;
        color: white;
      }
      .btn-wolter1:hover {
        background-color: #04427d;
        color: white;
      }
      `}
    </style>
    <tr>
      <td>{item['Manufacturer']}</td>
      <td>{item['Catalog or Item Number']}</td>
      <td style={{fontSize:'70%'}}>{item['Description'].split('.').join(' ')}</td>
      <td className='hide-ipad' style={{display:'none'}}>
        { selected 
        ? (<Button 
          variant="dark"
          onClick={() => {
            const removedItem = parts.filter((subItem) => item['Catalog or Item Number'] !== subItem)
            setParts(removedItem)
            setSelected(!selected)
          }
          }>
          Remove Part
        </Button>) 
        : (<Button 
          variant="wolter1" 
          onClick={() => {
            setParts([...parts, item['Catalog or Item Number']])
            setSelected(!selected)
          }
        }>
          Select Part
        </Button>)}
      </td>
    </tr>
    </>
  )
}