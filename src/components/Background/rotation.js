export function setMat3FromEuler(yawY, pitchX, rollZ, out) {
  const cy = Math.cos(yawY),
    sy = Math.sin(yawY);
  const cx = Math.cos(pitchX),
    sx = Math.sin(pitchX);
  const cz = Math.cos(rollZ),
    sz = Math.sin(rollZ);
  const r00 = cy * cz + sy * sx * sz;
  const r01 = -cy * sz + sy * sx * cz;
  const r02 = sy * cx;

  const r10 = cx * sz;
  const r11 = cx * cz;
  const r12 = -sx;

  const r20 = -sy * cz + cy * sx * sz;
  const r21 = sy * sz + cy * sx * cz;
  const r22 = cy * cx;

  out[0] = r00;
  out[1] = r10;
  out[2] = r20;
  out[3] = r01;
  out[4] = r11;
  out[5] = r21;
  out[6] = r02;
  out[7] = r12;
  out[8] = r22;
  return out;
}

export function setMat3Identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
