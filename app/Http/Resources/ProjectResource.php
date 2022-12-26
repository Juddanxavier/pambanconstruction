<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;


class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'address' => $this->address,
            'location' => $this->location,
            'description' => $this->description,
            'status' => $this->status,
            'gallery' => asset('/storage/' . $this->gallery),
            // 'gallery' => Storage::url('demo'),
        ];
    }
}
