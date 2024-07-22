window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            const entity = document.createElement("a-box");
            entity.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity.setAttribute('material', { color: 'red' } );
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);


            const entity2 = document.createElement("a-box");
            entity2.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity2.setAttribute('material', { color: 'yellow' } );
            entity2.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude + 0.001
            });
            document.querySelector("a-scene").appendChild(entity2);
            
            const entity3 = document.createElement("a-box");
            entity3.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity3.setAttribute('material', { color: 'orange' } );
            entity3.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude - 0.01,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity3);

            const entity4 = document.createElement("a-box");
            entity4.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity4.setAttribute('material', { color: 'magenta' } );
            entity4.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude - 0.01
            });
            document.querySelector("a-scene").appendChild(entity4);
        }
        testEntityAdded = true;
    });
};