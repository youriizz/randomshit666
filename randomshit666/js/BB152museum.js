const element = document.querySelector('.document-window');
let scale = 1, deltaX = 0, deltaY = 0, lastX = 0, lastY = 0, lastScale = 1;

const maxzoom = 5, minzoom = 0.5; //restrict the zoom and dezoom 

const originalWidth = element.getBoundingClientRect().width;
const originalHeight = element.getBoundingClientRect().height;

// boundaries within which the element can be panned
let limit = {
    left: 0, 
    top: 0, 
    right: window.innerWidth - element.getBoundingClientRect().width,
    bottom: window.innerHeight - element.getBoundingClientRect().height
};
// TODO: adjust right and bottom so we see the border

const hammertime = new Hammer.Manager(element);
hammertime.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
hammertime.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith(hammertime.get('pan'));

hammertime.on('panstart panmove', (e) => {
    if (e.type === 'panstart') {
        lastX = deltaX;
        lastY = deltaY;
    }
    let newX = lastX + e.deltaX;
    let newY = lastY + e.deltaY;

    deltaX = Math.min(limit.left, Math.max(limit.right, newX));
    deltaY = Math.min(limit.top, Math.max(limit.bottom, newY));

    updateTransform();
});

// TODO
hammertime.on('pinchstart pinchmove', (e) => {
    if (e.type === 'pinchstart') {
        lastScale = scale;
    }
    scale = lastScale * e.scale;

    updateTransform();
});

element.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent scrolling

    // Calculate cursor position relative to the element
    const rect = element.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    const scaleX = cursorX / rect.width;
    const scaleY = cursorY / rect.height;

    // Adjust the divisor to control the zoom sensitivity
    const scaleAdjustment = e.deltaY / -1300;

    // Restrict scale between min and max
    scale = Math.max(minzoom, Math.min(maxzoom, scale + scaleAdjustment)); 

    
    // Adjust deltaX and deltaY based on the scale change and cursor position
    // This moves the element to keep the cursor's point as the focal point of the zoom
    deltaX -= scaleAdjustment * rect.width * scaleX;
    deltaY -= scaleAdjustment * rect.height * scaleY;

    recalculatePanLimits(scale);

    // Refine deltaX and deltaY to respect the new limits
    deltaX = Math.min(limit.left, Math.max(limit.right, deltaX));
    deltaY = Math.min(limit.top, Math.max(limit.bottom, deltaY));

    updateTransform();
});


function updateTransform() {
    element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale}, ${scale})`;
}

function recalculatePanLimits(scale) {
    // Calculate the new limits based on the scaled dimensions
    const scaledWidth = originalWidth * scale;
    const scaledHeight = originalHeight * scale;

    limit.right = Math.min(0, window.innerWidth - scaledWidth);
    limit.bottom = Math.min(0, window.innerHeight - scaledHeight);

}