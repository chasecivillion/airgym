import React, {useState} from 'react'
import EditModal from './EditModal'

function PodCard({ pod, remainingPods, updatedPods }) {

  const [ showEditModal, setShowEditModal ] = useState(false);

  const deletePod = () => {
    fetch(`/user/${pod.id}/pods`, { method: "DELETE" })
      .then(remainingPods(pod.id))
  }

  const openModal = () => {
    setShowEditModal(true)
  }

  return (
    <div >
      <section>
        <h1>
        {pod.name}
        </h1>
        <img src={pod.image} alt="pod"/>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={deletePod}>Delete Pod</button>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={openModal}>Edit Pod</button>
        <h2>Pod Description goes here</h2>
      </section>
      <EditModal updatedPods={updatedPods} name={pod.name} image={pod.image} id={pod.id} open={showEditModal} onClose={() => setShowEditModal(false)} />
    </div>
  )
}

export default PodCard